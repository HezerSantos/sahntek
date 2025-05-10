exports.logoutController = async(req, res) => {
    res.clearCookie("access", {
        httpOnly: true, 
        secure: true, 
        sameSite: "None",
        path: "/",
    });
    res.clearCookie("refresh", {
        httpOnly: true,      
        secure: true,
        sameSite: "None", 
        path: "/",
    });
    
      console.log("Logged Out")
      res.json({ message: "Logged out successfully" });
}