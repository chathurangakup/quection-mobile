1. Calculator App
🧮 This is a simple calculator app built with React Native and Expo.

You can enter two numbers into the input fields.

Tap the "Add Two Numbers" button.

The app will calculate and display the total.

<img width="381" alt="Calculator Screenshot" src="https://github.com/user-attachments/assets/e1fb9ab4-79ab-4bb6-9ac3-8b315ba536d9" />


2. Navbar (navbar.tsx)
🔧 Key Features:

✅ Responsive Design
On mobile screens (width < 768): Displays a search icon and a hamburger menu.

On larger screens: Shows a full navigation menu with items like AEON, Docs, Blog, etc., along with a search input.

📱 Drawer Menu for Mobile
Tapping the hamburger icon opens a slide-out drawer (modal) showing all navigation items.

🧠 Dynamic Layout Detection
Uses Dimensions and useEffect to listen for screen width changes and update the layout in real time.

🎨 Clean Styling
Uses StyleSheet.create to keep the UI clean, consistent, and easy to maintain.

<img width="1503" alt="Navbar Desktop Screenshot" src="https://github.com/user-attachments/assets/d60d3be3-62d6-4779-84f6-28be0123c52b" /> <img width="419" alt="Navbar Mobile Screenshot" src="https://github.com/user-attachments/assets/1717ee99-3765-4838-b1e0-9cc0fd030fad" />


3. Question 3 (quection3.tsx)
This function solves the classic "Two Sum" problem from LeetCode.

💡 How it works:
It loops through every pair of numbers in the array using two for loops.

For each pair, it checks:

“Do these two numbers add up to the target?”

If they do, it saves their indexes in a result array.

Finally, it returns the indexes of those two numbers.
