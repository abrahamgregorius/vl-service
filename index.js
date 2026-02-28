const express = require("express");
const bodyParser = require("body-parser");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(bodyParser.json());

// Konfigurasi Supabase
const SUPABASE_URL = "https://zzulibfwywxjxlmtkbxr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dWxpYmZ3eXd4anhsbXRrYnhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyOTgxMjksImV4cCI6MjA4Nzg3NDEyOX0.p8OXSSGAOlgsS7OmxdPmeqX3OF-6VwuY6mmiYvE7nnc";
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
        if (error) {
            if (error.code === "PGRST116") {
                return res.status(404).json({ error: "Data tidak ditemukan" });
            }
            return res.status(500).json({ error: "Supabase error", detail: error.message });
        }
        if (!data) {
            return res.status(404).json({ error: "Data tidak ditemukan" });~
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error", detail: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
