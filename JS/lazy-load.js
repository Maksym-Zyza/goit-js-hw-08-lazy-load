const images = document.querySelectorAll(".feed img");

const options = {
  rootMargin: "100px",
};

const onEntry = (entries, observer) => {
  console.log("YES");
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //   console.log(entry.target);

      const image = entry.target;
      const src = image.dataset.lazy;
      image.src = src;

      // Отключение наблюдения при повторном появлении картинки
      observer.unobserve(image);
    }
  });
};

const io = new IntersectionObserver(onEntry, options);

images.forEach((image) => io.observe(image));

// Один обзервер желательно использовать для колекции однотипних елементов
