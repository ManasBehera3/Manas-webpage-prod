# Manas Behera Website - Content Editing Guide

## 📋 Overview
This is a React-based website for Manas Behera. All content (text, images, links) can be edited through simple JSON files - **no coding experience required!**

## 🚀 Quick Start
1. **Start the website**: Open terminal in the project folder and run `npm start`
2. **View the website**: Open [http://localhost:3000](http://localhost:3000) in your browser
3. **Edit content**: Follow the guide below

---

## 📝 How to Edit Website Content

### **File Locations**
All editable content is located in: `src/content/` folder

### **Available Content Files**
- `hero.json` - Main banner section
- `about.json` - About Manas section  
- `books.json` - Books section
- `courses.json` - Courses section
- `podcast.json` - Podcast section
- `testimonials.json` - Client testimonials
- `footer.json` - Footer information

---

## 🎯 Section-by-Section Editing Guide

### **1. Hero Section (`hero.json`)**
**File**: `src/content/hero.json`

**What you can edit**:
- `title` - Main heading (e.g., "THE GENIUS CODE")
- `subtitle` - Subtitle text
- `cta` - Button text (e.g., "BOOK NOW")
- `image` - Background image URL

**Example**:
```json
{
        "title": "Welcome to Manas Behera's World",
  "subtitle": "Inspiring millions through words and workshops",
  "cta": "JOIN NOW",
  "image": "https://your-image-url.com/image.jpg"
}
```

### **2. About Section (`about.json`)**
**File**: `src/content/about.json`

**What you can edit**:
- `title` - Section title
- `paragraphs` - Array of text paragraphs
- `quote` - Quote text
- `name` - Person's name
- `role` - Job title
- `avatar` - Avatar initials

**Example**:
```json
{
  "title": "About Manas",
  "paragraphs": [
    "Your first paragraph here...",
    "Your second paragraph here...",
    "Your third paragraph here..."
  ],
  "quote": "Your inspirational quote here...",
  "name": "Manas Behera",
  "role": "CEO & Chief Facilitator",
  "avatar": "MK"
}
```

### **3. Books Section (`books.json`)**
**File**: `src/content/books.json`

**What you can edit**:
- `title` - Section title
- `description` - Section description
- `books` - Array of book objects
- `cta` - Call-to-action button text

**Example**:
```json
{
  "title": "BOOKS",
  "description": "Your books description here...",
  "books": [
    {
      "title": "Your Book Title",
      "description": "Book description",
      "image": "https://your-book-image.jpg"
    }
  ],
  "cta": "READ NOW"
}
```

### **4. Courses Section (`courses.json`)**
**File**: `src/content/courses.json`

**What you can edit**:
- `title` - Section title
- `description` - Section description
- `courses` - Array of course objects
- `cta` - Call-to-action button text

**Example**:
```json
{
  "title": "COURSES",
  "description": "Your courses description...",
  "courses": [
    {
      "title": "Course Title",
      "description": "Course description",
      "duration": "8 weeks",
      "level": "Intermediate",
      "image": "https://your-course-image.jpg"
    }
  ],
  "cta": "VIEW ALL COURSES"
}
```

### **5. Podcast Section (`podcast.json`)**
**File**: `src/content/podcast.json`

**What you can edit**:
- `title` - Section title
- `description` - Section description
- `episodes` - Array of episode objects
- `ctaSpotify` - Spotify button text
- `ctaAudible` - Audible button text

**Example**:
```json
{
  "title": "PODCASTS",
  "description": "Your podcast description...",
  "episodes": [
    {
      "title": "Episode Title",
      "description": "Episode description",
      "duration": "45 min",
      "image": "https://your-episode-image.jpg"
    }
  ],
  "ctaSpotify": "SPOTIFY",
  "ctaAudible": "AUDIBLE"
}
```

### **6. Testimonials Section (`testimonials.json`)**
**File**: `src/content/testimonials.json`

**What you can edit**:
- `title` - Section title
- `testimonials` - Array of testimonial objects
- `footer` - Footer text

**Example**:
```json
{
  "title": "CLIENT TESTIMONIALS",
  "testimonials": [
    {
      "name": "Client Name",
      "position": "Job Title, Company",
      "content": "Client testimonial text...",
      "rating": 5,
      "avatar": "CN"
    }
  ],
  "footer": "Your footer text here..."
}
```

### **7. Footer Section (`footer.json`)**
**File**: `src/content/footer.json`

**What you can edit**:
- `name` - Person's name
- `role` - Job title
- `quote` - Quote text
- `contact` - Contact information
- `social` - Social media links
- `copyright` - Copyright text
- `links` - Footer links

**Example**:
```json
{
  "name": "Manas Behera",
  "role": "CEO & Chief Facilitator",
  "quote": "Your quote here...",
  "contact": {
    "phone": "+91 1234567890",
    "email": "manas@example.com",
    "address": "Your address"
  },
  "social": [
    { "label": "Facebook", "icon": "facebook" },
    { "label": "Twitter", "icon": "twitter" }
  ],
  "copyright": "© 2025 Copyrights Manas Behera. All rights reserved.",
  "links": [
    { "label": "Privacy Policy", "href": "#" },
    { "label": "Contact Us", "href": "#" }
  ]
}
```

---

## 🛠️ Technical Requirements

### **To Run the Website**
1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
2. **Open Terminal/Command Prompt**
3. **Navigate to project folder**
4. **Run**: `npm install` (first time only)
5. **Run**: `npm start`
6. **Open**: [http://localhost:3000](http://localhost:3000)

### **To Edit Content**
1. **Open any text editor** (Notepad, VS Code, Sublime Text, etc.)
2. **Open the JSON file** you want to edit
3. **Make your changes**
4. **Save the file**
5. **Refresh your browser** to see changes

---

## 📸 Adding Images

### **For Local Images**
1. Add your image to the `public/images/` folder
2. Reference it as: `"/images/your-image.jpg"`

### **For Online Images**
1. Upload your image to any image hosting service
2. Use the direct URL in the JSON file

**Example**:
```json
{
  "image": "https://your-image-hosting.com/image.jpg"
}
```

---

## ⚠️ Important Notes

### **JSON Format Rules**
- Always use **double quotes** `"` not single quotes `'`
- Separate multiple items with **commas** `,`
- Don't forget the **closing brackets** `}`

### **Common Mistakes to Avoid**
- ❌ Don't forget commas between items
- ❌ Don't use single quotes
- ❌ Don't remove the closing brackets
- ✅ Always save the file after editing
- ✅ Refresh your browser to see changes

### **Backup Your Content**
- Make a copy of your JSON files before making major changes
- Keep backups in a separate folder

---

## 🆘 Troubleshooting

### **Website Not Loading**
- Make sure you're in the correct folder
- Run `npm install` if you get module errors
- Check that `npm start` is running

### **Changes Not Appearing**
- Save the JSON file after editing
- Refresh your browser (Ctrl+F5)
- Check for JSON syntax errors (missing commas, quotes)

### **JSON Errors**
- Use a JSON validator online to check your syntax
- Make sure all quotes and brackets are properly closed

---

## 📞 Support

If you need help:
1. Check this documentation first
2. Verify your JSON syntax
3. Make sure all files are saved
4. Restart the development server if needed

## Deployments
1. Always develop/make changes in Dev branch. Run the code, debugg and once successful then pull into Main/Production. Here are steps to follow:
2. Make changes in dev branch
3. See and Wait for github action tab to build the changes
4. If not build successfully, revert the last change. Steps to revert to be followed.
5. If build is successful, then create a 'Pull Request'
6. Go to 'Pull Request' tab, select 'Main' as base branch and see all the changes
7. If everything looks good with no conflicts, Merge the pull request.
8. Wait for github Action to build and deploy the changes.

---

## 🎉 You're Ready!

You now have full control over your website content. Edit any JSON file, save it, and see your changes instantly on the website!

**Happy editing!** 🚀 
