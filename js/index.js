import './custom-select.js';

const alerts = { copied: 'copied', complete: 'complete' };

function showAlert(alert) {
  const alerts = document.querySelector('.alerts');
  const alertsItem = document.querySelector('.alerts__item');

  if ((alerts, alertsItem)) {
    alertsItem.innerText = String(alert);
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

const modals = {
  withdraw: 'modal_complete-withdraw',
  swap: 'modal_complete-swap',
  points: 'modal_points',
};

const modalElems = document.querySelectorAll('.modal');

function showModal(modalClassName) {
  const modalElem = document.querySelector(`.${modalClassName}`);
  if (modalElem) modalElem.classList.add('active');
}

function closeModal(modal) {
  modal.classList.remove('active');
}

modalElems.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isModal = event.target === event.currentTarget;
    const isButton = event.target.classList.contains('button');

    if (isModal || isButton) closeModal(modal);
  });
});

const walletSwapForm = document.querySelector('.wallet__swap-form');
const walletTokensCardPointsInfoButton = document.querySelector('.wallet__tokens-card-points-info');

if (walletSwapForm) {
  walletSwapForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showModal(modals.swap);
  });
}

if (walletTokensCardPointsInfoButton) {
  walletTokensCardPointsInfoButton.addEventListener('click', () => {
    showModal(modals.points);
  });
}

const walletInfoMore = document.querySelector('.wallet__info-more');

if (walletInfoMore) {
  walletInfoMore.addEventListener('click', (event) => {
    const isMoreElem = event.target === event.currentTarget;
    const isMoreButton = event.target.classList.contains('wallet__info-more-button');
    const isCopyButton = event.target.classList.contains('wallet__info-more-modal-seed-copy');

    if (isMoreElem) {
      event.currentTarget.classList.remove('active');
    }

    if (isMoreButton) {
      event.currentTarget.classList.add('active');
    }

    if (isCopyButton) {
      showAlert(alerts.copied);
      event.currentTarget.classList.remove('active');
      navigator.clipboard.writeText(event.currentTarget.dataset.code);
    }
  });
}
