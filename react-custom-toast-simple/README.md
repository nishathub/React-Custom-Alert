# 🔔 react-custom-toast-simple

A simple and reusable React toast (alert) component with context — customizable, lightweight, and easy to use in any React project.

---

## ✨ Features

- ✅ Custom alert messages like toasts
- ✅ Easy setup using React Context
- ✅ Works across the whole project
- ✅ Auto dismiss after timeout
- ✅ Customizable look and duration

---

## 📦 Installation

```bash
npm install react-custom-toast-simple
```
---

## 🚀 Usage
- 1. Wrap Your App in ToastProvider

```bash
// App.jsx or root layout
import { ToastProvider } from 'react-custom-toast-simple';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}
```

- 2. Place the Toast Component Once (e.g., in Layout)

```bash
import { BToast } from 'react-custom-toast-simple';

const Layout = () => {
  return (
    <>
      <Navbar />
      <BToast /> {/* Toast pop-up component */}
      <Outlet />
      <Footer />
    </>
  );
};

```

- 3. Use the customAlert() Function Anywhere

```bash

import { useCustomAlert } from 'react-custom-toast-simple';

const MyComponent = () => {
  const customAlert = useCustomAlert();

  const handleClick = () => {
    customAlert('This is a custom toast!', 2000); // optional second arg = duration (ms)
  };

  return <button onClick={handleClick}>Show Toast</button>;
};
```

## 🎨 Customization
You can customize the look of the toast by editing the toast component styles:

```bash
<div className="bg-red-900 text-white w-72 p-4 text-center rounded-lg">
  <p>{toastText}</p>
</div>

```
---

## 🧩 Example

```bash
customAlert("Saved successfully!", 1500);
```
- First parameter: Message to display
- Second parameter: Duration in milliseconds (optional, default: 1500ms)
---

## 🤝 License
- MIT — Free to use, modify, and share.

---
## 💡 Author  
Ashraf Nishat  
[GitHub Profile](https://github.com/nishathub)
