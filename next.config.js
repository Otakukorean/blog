/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['e1.pxfuel.com','www.hdwallpapers.in','res.cloudinary.com','https://blog1-4rvj.onrender.com/']
    } ,
    typescript : {
        ignoreBuildErrors : true
    } ,
    env : {NEXTAUTH_URL : "https://blog1-4rvj.onrender.com"}
}

module.exports = nextConfig
