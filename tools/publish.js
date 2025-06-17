const { execSync } = require('child_process');
const path = require('path');
const process = require('process');

const bump = process.argv[2];
const allowed = ['patch', 'minor', 'major'];

if (!allowed.includes(bump)) {
  console.error(`❌ Unknown version bump type: "${bump}". Use patch, minor, or major.`);
  process.exit(1);
}

try {
  console.log(`📦 Bumping version (${bump}) in projects/vitron-ui`);
  execSync(`npm version ${bump} --prefix projects/vitron-ui`, { stdio: 'inherit' });

  console.log(`🛠 Building vitron-ui library...`);
  execSync(`ng build vitron-ui`, { stdio: 'inherit' });

  console.log(`🚀 Publishing to npm from dist/vitron-ui`);
  const distPath = path.resolve(__dirname, '../dist/vitron-ui');
  process.chdir(distPath);
  execSync(`npm publish --access public`, { stdio: 'inherit' });

  console.log('✅ All done!');
} catch (err) {
  console.error('❌ Error during release:', err.message);
  process.exit(1);
}
