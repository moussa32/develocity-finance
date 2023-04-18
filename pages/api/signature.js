const crypto = require("crypto");

export default function handler(req, res) {
  const { address } = req.body;

  if (req.method !== "POST") {
    res.status(500).json({ message: "This endpoint only support POST type" });
  }

  if (!address) {
    res.status(500).json({ message: "User address is required" });
  }

  const encrypt = (plainText, secretKeyData) => {
    try {
      const plainTextData = Buffer.from(plainText, "utf8");
      const secretKey = Buffer.from(secretKeyData, "utf8");
      const iv = secretKeyData.substring(0, 16);

      const cipher = crypto.createCipheriv("aes-128-cbc", secretKey, iv);

      let encrypted = cipher.update(plainTextData);
      encrypted = Buffer.concat([encrypted, cipher.final()]);

      return encrypted.toString("base64");
    } catch (e) {
      console.log(`AES encrypting exception, msg is ${e.toString()}`);
    }
    return null;
  };

  const plainText = `address=${address}&appId=${process.env.NEXT_PUBLIC_ALCHEMYPAY_APP_ID}`;
  const cipherText = encrypt(plainText, process.env.ALCHEMYPAY_APP_SECRET);
  const urlEncodeText = encodeURIComponent(cipherText);

  res.status(200).json({ sign: urlEncodeText });
}
