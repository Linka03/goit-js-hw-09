import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const firstDelay = parseInt(formData.get('delay'), 10);
  const step = parseInt(formData.get('step'), 10);
  const amount = parseInt(formData.get('amount'), 10);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + i * step;
    try {
      const result = await createPromise(position, delay);
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
      );
    } catch (error) {
      Notiflix.Notify.failure(
        `❌ Rejected promise ${error.position} in ${error.delay}ms`
      );
    }
  }
}

form.addEventListener('submit', handleSubmit);
