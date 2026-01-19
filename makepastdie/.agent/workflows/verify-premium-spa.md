---
description: Verification steps for the Premium SPA Update
---

# Premium SPA Design & Content Verification

This workflow guides you through verifying the recent major updates to the YouTube Success Strategy application.

## 1. Visual Design Check
- [ ] **Open `index.html`** in your browser.
- [ ] **Font Check**: Verify that the main text is using "NanumSquare Neo" (it should look clean and modern, distinct from default sans-serif).
- [ ] **Series 1 Hero Section**:
    - Check for the "Official Series 01" badge (red).
    - Ensure the main title "유튜브 성공 전략: 제대로 이해하고 준비하기" is large, bold (`font-black`), and has a gradient effect on the second line.
    - Confirm the background contains a subtle red glow effect.
- [ ] **Cards & Visuals**:
    - Scroll down to the "Prologue" and "Chapter 1".
    - Confirm that content is contained within **Cards** (glassmorphism or dark bordered boxes).
    -Check that **Highlights** are using background colors (e.g., red/blue/green backgrounds behind text) instead of just simple bold text.
    - Look for the **Badges** (small pill-shaped labels like "My Target", "Level 1", etc.).

## 2. Content Completeness (Series 1)
- [ ] **Prologue**: Confirm the "Pain Points" (Father's affair, Mother's suicide, Fraud) are displayed in a grid or visually distinct layout.
- [ ] **Chapter 1**:
    - Check for the "My Target" (100 million won) and "Minimum Win" (300 million won) cards.
    - Verify the list of "8 Practical Habits" in Chapter 4 is present and styled with icons.
- [ ] **Chapter 6**: Confirm the "80% Strategy" infographic section (Subject -> Title/Thumb -> Content) is visible.

## 3. SPA Navigation Test
- [ ] **Click "Next Level" Button** at the bottom of Series 1.
    - The page should **Smooth Scroll** to the top.
    - The content should instantly change to **Series 2**.
    - The URL bar might not change (or might show `#` or just stay same), but the page should NOT reload (no white flash).
- [ ] **Sidebar Navigation**:
    - Click "Series 3" in the sidebar.
    - Confirm content switches to "5 Popular Topics".
    - Check that the Sidebar Title for Series 1 is "Series 1:\nProperly Understand..." (displayed on two lines).

## 4. Mobile Responsiveness
- [ ] Resize browser window to mobile width.
- [ ] Check if the **Sidebar** collapses and can be toggled with the Menu button.
- [ ] Ensure the huge titles in the Hero section scale down and don't overflow.
