import express from "express";
import bodyParser from "body-parser";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(bodyParser.json());

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

app.post("/v1/kyc/verify-nik", async (req, res) => {
    const { nik } = req.body;
    if (!nik) {
        return res.status(400).json({ error: "nik wajib diisi" });
    }
    try {
        const { data, error } = await supabase
            .from("kyc_ktp")
            .select("*")
            .eq("nik", nik)
            .single();
        if (error && error.code === "PGRST116") {
            return res.status(404).json({ error: "NIK tidak ditemukan" });
        }
        if (error) {
            return res.status(500).json({ error: "Supabase error", detail: error.message });
        }
        if (!data) {
            return res.status(404).json({ error: "NIK tidak ditemukan" });
        }
        return res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error", detail: err.message });
    }
});


export default app;
