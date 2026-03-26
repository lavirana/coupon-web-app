const form = document.getElementById('coupon-form');
const storeInput = document.getElementById('store');
const discountType = document.getElementById('discount-type');
const discountValue = document.getElementById('discount-value');
const expiryInput = document.getElementById('expiry');
const prefixInput = document.getElementById('prefix');
const result = document.getElementById('result');
const summary = document.getElementById('summary');
const codeEl = document.getElementById('coupon-code');
const copyBtn = document.getElementById('copy-btn');

function randomToken(length = 6) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function buildCode() {
  const prefix = prefixInput.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
  const store = storeInput.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  return [prefix || store || 'SAVE', randomToken()].join('-');
}

function discountText() {
  if (discountType.value === 'shipping') {
    return 'free shipping';
  }

  const value = Number(discountValue.value);
  if (!value || value <= 0) {
    return 'a special discount';
  }

  return discountType.value === 'percent' ? `${value}% off` : `$${value} off`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const store = storeInput.value.trim() || 'your favorite store';
  const discount = discountText();
  const expiry = expiryInput.value ? new Date(expiryInput.value).toLocaleDateString() : 'no expiration date';

  codeEl.textContent = buildCode();
  summary.textContent = `Use this code at ${store} for ${discount}. Expires: ${expiry}.`;
  result.classList.remove('hidden');
});

copyBtn.addEventListener('click', async () => {
  const code = codeEl.textContent;
  if (!code) return;

  await navigator.clipboard.writeText(code);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyBtn.textContent = 'Copy';
  }, 1500);
});
