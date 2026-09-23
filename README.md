1. Explain My project

প্রথমত, আমরা আমাদের নির্দিষ্ট Directory-তে React Project চালু করেছিলাম Command Prompt-এর মাধ্যমে নিচের কমান্ড ব্যবহার করে:

`npm create vite@latest react-car-website-- --template react`

এরপর একে একে প্রয়োজনীয় সব Dependencies Install করেছিলাম এবং Local Directory-এর মধ্যে একটি সম্পূর্ণ React Project তৈরি হয়েছিল।

প্রথমে পুরো Design-টিকে ছোট ছোট Logical Component-এ ভাগ করেছিলাম এবং কোন Component-এর মধ্যে কোন Component থাকবে, সেটা বোঝার জন্য একটি Component Hierarchy Diagram তৈরি করেছিলাম।

তারপর Tailwind CSS ব্যবহার যুক্ত করে সেটি ভালো ভাবে যুক্ত হইয়েছে কিনা সেটা চেক করার পর প্রোজেক্ট GitHub এর সাথে connect করে নিয়েছিলাম এবং Vercel platform এ Deploy করেছিলাম।

এরপর সেই Hierarchy অনুযায়ী React-এ প্রয়োজনীয় Component তৈরি করেছিলাম এবং Component-গুলো একে অপরের সঙ্গে Conncet করেছিলাম Export-Import এর মাধ্যমে।
এরপর React DevTools ব্যবহার করে তৈরি করা Component Hierarchy সঠিকভাবে হয়েছে কি না, সেটা যাচাই করেছিলাম।

এরপর আমাদের দেওয়া UI-টি React এর নিয়মে কোড করে তৈরি করেছিলাম। আমাদের Car Data একটি Array of Objects হিসেবে দেওয়া হয়েছিল, যা ব্যবহার করে CarsContainer এর মধ্যে CarInfoCard গুলোতে props এর মাধ্যমে Data পাঠিয়েছিলাম। এভাবে কোন ডিজাইন ছাড়াই ওয়েবসাইটটি তৈরি করেছিলাম।

তারপর প্রতিটি Component-এর Styling করেছিলাম এবং provided
Design-এর সঙ্গে মিল রাখার চেষ্টা করেছিলাম।

সবশেষে Project-এ কোনো ESLint Error বা Console Error আছে কি না, সেটা পরীক্ষা করেছিলাম।

এরপর Project এর সেই কাজটুকু GitHub-এ Push করেছিলাম এবং Project-টি Deploy করেছিলাম।

সবশেষে Project সম্পর্কে প্রয়োজনীয় তথ্য, Project কীভাবে চালাতে হবে এবং Deployment Link সহ প্রয়োজনীয় বিষয়গুলো README File-এ Document করেছিলাম।

#2.How to run the project:
কোড করার সময় live output দেখার জন্য "npm run dev" command use করে terminal e localhost server link use করেছি.

#3.The screenshot of the UX design diagram

![UX design diagram](./screenshots/Componentbreakdowndiagram.png)

#4. Component Hierarchy diagram

![Component Hierarchy diagram](./screenshots/Componenthierarchydiagram.png)

#5. React Dev Tools Screenshot

![React Dev Tools Screenshot](./screenshots/ReactdevtoolSS.png)


#6. The Readme should have the deploy link of the app too.

tapaScript Cars App
 
LiveLink:  