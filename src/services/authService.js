export const registerUser = async (formData) => {
  try {
    const response = await fetch("https://dashboard-server-1-fcxo.onrender.com/register", {  // ✅ Check this URL
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();  // 🔥 If server sends HTML, this will fail
    return data;
  } catch (error) {
    console.error("Register Error:", error);
    throw error;
  }
};
