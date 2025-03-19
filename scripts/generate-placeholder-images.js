const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Define directories
const blogImagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
const authorImagesDir = path.join(process.cwd(), 'public', 'images', 'authors');

// Create directories if they don't exist
[blogImagesDir, authorImagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Blog post images to generate
const blogImages = [
  'market-expansion.jpg',
  'market-research.jpg',
  'risk-management.jpg'
];

// Author images to generate
const authorImages = ['john-doe.jpg'];

// Generate blog post images
blogImages.forEach(filename => {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#1a365d';
  ctx.fillRect(0, 0, 1200, 630);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(
    filename.replace('.jpg', '').replace(/-/g, ' ').toUpperCase(),
    600,
    315
  );

  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(blogImagesDir, filename), buffer);
});

// Generate author images
authorImages.forEach(filename => {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#2d3748';
  ctx.fillRect(0, 0, 200, 200);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(
    filename.replace('.jpg', '').replace(/-/g, ' ').toUpperCase(),
    100,
    100
  );

  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(authorImagesDir, filename), buffer);
});

console.log('Placeholder images generated successfully!'); 