const articles = [
    {
      id: 'art1',
      title: 'article',
      trailer: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti animi dicta porro doloribus incidunt minus molestias quaerat quis harum!',
      author: 'Me',
    },
    {
      id: 'art2',
      title: 'article',
      trailer: false,
      content:
        'Natus praesentium distinctio, reiciendis doloribus dolorem, nobis deserunt unde aperiam voluptas eligendi qui veniam iusto nihil fugit! Nesciunt, ducimus temporibus?',
      author: 'Me',
    },
    {
      id: 'art3',
      title: 'article',
      trailer: false,
      content:
        'Reiciendis earum accusamus atque ducimus maiores nihil culpa impedit voluptate incidunt repellendus libero, vel, quidem at? Numquam veniam quae nesciunt.',
      author: 'Me',
    },
    {
      id: 'art4',
      title: 'article',
      trailer: false,
      content:
        'Minus obcaecati veniam sed voluptate ab provident, illo necessitatibus voluptatem unde quaerat. Adipisci, quae voluptatibus. At nulla repellendus animi cum?',
      author: 'Me',
    },
    {
      id: 'art5',
      title: 'trailer',
      trailer: true,
      content:
        'Officia eius, magnam saepe at architecto accusantium illo distinctio pariatur cum impedit. Labore accusamus iure ratione, laboriosam dolorem minus odit',
      author: 'Me',
    },
    {
      id: 'art6',
      title: 'trailer',
      trailer: true,
      content:
        'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
      author: 'Me',
    },
    {
      id: 'art7',
      title: 'trailer',
      trailer: true,
      content:
        'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
      author: 'Me',
    },
  ];

  for(let i=0; i < articles.length; i++){
      let uuid = self.crypto.randomUUID();
      document.querySelector(".container").innerHTML+=`<p>id: ${uuid}</p>`;
  }

  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const author = document.getElementById("author");
  const trailer = document.getElementById("isTrailer");

  document.getElementById("formularz").addEventListener("submit", function (e) {
    e.preventDefault();

    let title_ = title.value;
    let content_ = content.value;
    let author_ = author.value;
    let trailer_ = trailer.checked;

    // console.log(title_);
    // console.log(content_);
    // console.log(author_);
    // console.log(trailer_);

    articles.push({articles})
  });
  