import './custom-select.js';

const alerts = { copied: 'copied', complete: 'complete' };

function showAlert(alert) {
  const alerts = document.querySelector('.alerts');
  const alertsItem = document.querySelector('.alerts__item');

  if ((alerts, alertsItem)) {
    alertsItem.innerText = String(alert);
    console.log(alertsItem.innerText)
    alerts.classList.add('active');
    alertsItem.classList.add(`alerts__item_${alert}`);

    setTimeout(() => {
      if (alerts.classList.contains('active')) {
        alerts.classList.remove('active');
        alertsItem.innerText = '';
        alertsItem.classList = 'alerts__item';
      }
    }, 800);
  }
}

const walletInfoCode = document.querySelector('.wallet__info-code');

if (walletInfoCode) {
  walletInfoCode.addEventListener('click', (event) => {
    const isCopyButton = event.target.classList.contains('wallet__info-code-copy');

    if (isCopyButton) {
      navigator.clipboard.writeText(walletInfoCode.dataset.code);
      showAlert(alerts.copied);
    }
  });
}
