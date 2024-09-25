import './custom-select.js';
import './accordeon.js';

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
  referrals: 'modal_referrals',
  socialUser: 'modal_social-user',
  socialFollowing: 'modal_social-following',
  socialFaq: 'modal_social-faq',
};

const modalElems = document.querySelectorAll('.modal');

function showModal(modalClassName) {
  const modalElem = document.querySelector(`.${modalClassName}`);
  if (modalElem) {
    modalElem.classList.add('active');
    document.body.classList.add('hidden');
  }
}

function closeModal(modal) {
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('hidden');
  }
}

modalElems.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isModal = event.target === event.currentTarget;
    const isButton = event.target.classList.contains('button');
    const isButtonConfirm = event.target.classList.contains('button_confirm');

    if (isModal || isButton) closeModal(modal);

    if (isButtonConfirm) showAlert(alerts.complete);
  });
});

const walletSwapForm = document.querySelector('.wallet__swap-form');
const withdrawForm = document.querySelector('.withdraw__swap-form');
const walletTokensCardPointsInfoButton = document.querySelector('.wallet__tokens-card-points-info');

if (walletSwapForm) {
  walletSwapForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showModal(modals.swap);
  });
}

if (withdrawForm) {
  withdrawForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showModal(modals.withdraw);
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

const profilePointsInfoButton = document.querySelector('.profile__points-panel-question-button');
const profileReferralsInfoButton = document.querySelector(
  '.profile__referrals-panel-question-button'
);

if (profilePointsInfoButton) {
  profilePointsInfoButton.addEventListener('click', () => {
    showModal(modals.points);
  });
}

if (profileReferralsInfoButton) {
  profileReferralsInfoButton.addEventListener('click', () => {
    showModal(modals.referrals);
  });
}

if (Swiper) {
  const sidebarSwiperOptions = {
    speed: 3000,
    loop: true,
    slidesPerView: 1.25,
    spaceBetween: 10,
    centeredSlides: true,
    allowTouchMove: false,
  };

  const socialNewcomersSliderTop = new Swiper('.swiper.social__newcomers-slider-top', {
    ...sidebarSwiperOptions,
    autoplay: {
      delay: 0,
    },
  });

  const socialNewcomersSliderBottom = new Swiper('.swiper.social__newcomers-slider-bottom', {
    ...sidebarSwiperOptions,
    autoplay: {
      delay: 0,
      reverseDirection: true,
    },
  });
}

const socialFilterSortElem = document.querySelector('.social__filter-sort');

if (socialFilterSortElem) {
  socialFilterSortElem.addEventListener('click', (event) => {
    const isStatusElem = event.target.classList.contains('social__filter-sort-status');
    const isSortElem = event.target === event.currentTarget;

    if (isStatusElem) socialFilterSortElem.classList.toggle('active');
    if (isSortElem) socialFilterSortElem.classList.remove('active');
  });
}

const socialFilterSortRadioInputs = document.querySelectorAll('.social__filter-sort-radio-input');

socialFilterSortRadioInputs.forEach((input) => {
  input.addEventListener('change', (event) => {
    const socialFilterSortStatusType = document.querySelector('.social__filter-sort-status-type');
    if (socialFilterSortStatusType) socialFilterSortStatusType.innerText = event.target.value;
  });
});

const socialFilterSortCheckboxInput = document.querySelector(
  '.social__filter-sort-direction-checkbox'
);

if (socialFilterSortCheckboxInput) {
  socialFilterSortCheckboxInput.addEventListener('change', (event) => {
    const socialFilterSortStatusDirection = document.querySelector(
      '.social__filter-sort-status-direction'
    );
    if (event.target.checked) {
      socialFilterSortStatusDirection.classList.add('reversed');
    } else {
      socialFilterSortStatusDirection.classList.remove('reversed');
    }
  });
}

window.addEventListener('scroll', (event) => {
  const fourthSocialUsersCard = document.querySelector('.social__users-card:nth-child(4)');
  const socialUsersBack = document.querySelector('.social__users-back');
  if (fourthSocialUsersCard && socialUsersBack) {
    const delta = fourthSocialUsersCard.offsetTop - event.currentTarget.pageYOffset;

    if (delta >= 0) {
      socialUsersBack.style.display = 'none';
    } else {
      socialUsersBack.style.display = 'block';
    }
  }
});

const socialUserButton = document.querySelector('.social__info-user-more');
const socialFollowingButton = document.querySelector('.social__info-following-more');
const socialFaqButton = document.querySelector('.social__info-faq-more');

if (socialUserButton) {
  socialUserButton.addEventListener('click', () => showModal(modals.socialUser));
}
if (socialFollowingButton) {
  socialFollowingButton.addEventListener('click', () => showModal(modals.socialFollowing));
}
if (socialFaqButton) {
  socialFaqButton.addEventListener('click', () => showModal(modals.socialFaq));
}
