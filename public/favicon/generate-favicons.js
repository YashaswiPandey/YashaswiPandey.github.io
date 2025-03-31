const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 96, 192, 512];
const themes = ['light', 'dark'];

async function generateIcons() {
    await Promise.all(
        themes.map(async (theme) => {
            await Promise.all(
                sizes.map(async (size) => {
                    await sharp(`./favicon-${theme}.svg`)
                    .resize(size, size)
                    .png()
                    .toFile(path.join('./', `favicon-${theme}-${size}x${size}.png`));
                })
            );

            // Generate ICO file (Windows)
            await sharp(`./favicon-${theme}.svg`)
            .resize(32, 32)
            .png()
            .toFile(path.join('./', `favicon-${theme}.ico`));
        })
    );

    console.log('All favicons generated!');
}

generateIcons().catch(console.error);
