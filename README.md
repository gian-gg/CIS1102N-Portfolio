## Project Overview

This project fulfills a requirement for the CIS1102N course, compiling all portfolios into a centralized documentation website. Designed with modern principles, it aims to provide clear navigation and accessibility for users.

**URL**: https://epanto.dcism.org \
*VERCEL*: https://epanto.vercel.app

## Tech Stack

[![TECH](https://skillicons.dev/icons?i=figma,github,vite,nodejs,react,tailwind,markdown)](https://skillicons.dev)

\
**Libraries**:

    - react-icons
    - react-scroll
    - react-markdown
    - remark-gfm
    - rehype-slug
    - aos

# Deploying on DCISM Servers

## Steps to Deploy:

### 1. SSH
- Connect to the DCISM Servers using SSH.
- Replace `<usc_id>` with your ID.

```
ssh -p22077 s<usc_id>@web.dcism.org
```

### 2. Clone the Repository
- Navigate to your subdomain directory.
- Clone your project repository.
```
git clone <clone_link> .
```

###  3. Configure the Node.js Server

To host a React application on the DCISM servers, ensure the following:

-	Your root directory must include a .htaccess file. 
-	A Node.js Server with `express`.

**Note**: Refer to the instructions provided on admin.dcism.org for additional details.

### 4. Create .htaccess File

Add the following to your `.htaccess` file. Replace `<port>` with an allowed port number between `52500 - 52509`:

```
RewriteEngine on
RewriteRule (.*) http://127.0.0.1:<port>%{REQUEST_URI} [P,L]
```

**Note**: Ensure that the port number specified in your `.htaccess` file matches the port used in your Node.js server configuration.

### 5. Run the Node.js Server

**Install pm2:**
- Install pm2 to ensure the Node.js server remains active:

```
npm install pm2
```
**Start the Server Using pm2:**

- Run the following command in your SSH terminal to start the server:

```
npx pm2 start app.js
```

Your application should now be live and accessible through configured DCISM subdomain.

Note: Refer to the [**PM2**](https://www.npmjs.com/package/pm2) **Website** for more details.


## License

Copyright (c) 2024 GERI GIAN EPANTO

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License. You may not use this work for commercial purposes without permission from the author.
