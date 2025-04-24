# Sharing Your Love Gallery

This guide explains how to share your Love Gallery with people who are far away.

## How to Access the Gallery

Anyone can access your gallery using this URL:

```
http://49.37.35.184
```

## Troubleshooting

If someone can't access the gallery, here are some things to check:

1. **Make sure your computer is on and the server is running**:
   - Your computer needs to be on and the gallery server needs to be running for others to access it.
   - To start the server, open a terminal in the love-gallery folder and run: `npm start`

2. **Check your router's port forwarding**:
   - Make sure port forwarding is set up correctly on your router.
   - Ports 80 and 5000 should be forwarded to your computer's IP address (192.168.29.2).

3. **Firewall issues**:
   - Make sure your firewall isn't blocking incoming connections.
   - You might need to add exceptions for ports 80 and 5000 in your firewall settings.

4. **IP address changes**:
   - Your public IP address might change if your internet connection resets.
   - If this happens, you'll need to find your new public IP address and share it again.
   - You can find your public IP by searching "what is my IP" on Google.

5. **Router restrictions**:
   - Some internet service providers (ISPs) block incoming connections.
   - If this is the case, you might need to use a different method to share your gallery.

## Alternative Sharing Methods

If port forwarding doesn't work, you can try:

1. **Deploy to Vercel**:
   - Follow the instructions in the README.md file to deploy your gallery to Vercel.
   - This will give you a permanent URL that anyone can access.

2. **Use a tunneling service**:
   - Services like ngrok or localtunnel can create temporary public URLs for your local server.
   - Install ngrok: `npm install -g ngrok`
   - Run: `ngrok http 5173`
   - Share the URL that ngrok provides.

## Security Considerations

Remember that when you set up port forwarding, you're opening your computer to the internet. This is generally safe for sharing a simple gallery, but keep these points in mind:

1. Make sure your computer has up-to-date security software.
2. Consider turning off port forwarding when you're not actively sharing the gallery.
3. Never forward more ports than necessary.
