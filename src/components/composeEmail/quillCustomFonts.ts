// quillCustomFonts.ts
import Quill from 'quill';

// Safely cast the import to any to avoid the 'unknown' type error
const Font = Quill.import('formats/font') as any; // 'any' works to bypass the type error for now
Font.whitelist = ['sans-serif', 'serif', 'slabserif', 'script']; // List of allowed fonts

Quill.register(Font, true);

// Log the registered fonts to the console to verify the whitelist
console.log('Registered fonts:', Font.whitelist);
