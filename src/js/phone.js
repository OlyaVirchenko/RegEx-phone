export default function cleanNumber(phoneNumber) {
  return phoneNumber.replace(/[\s-()]/g, '').replace(/^\8/, '+7');
}
