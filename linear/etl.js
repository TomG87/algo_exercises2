// This is very similar to ETL #3, but you must now accomplish the task in linear time (O(N)).

// Given an array of Youtube videos, for example:

// [
// {title: 'How to Make Wood', author_id: 4, views: 6},
// {title: 'How to Seem Perfect', author_id: 4, views: 111},
// {title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
// {title: 'Why Pigs Stink', author_id: 1, views: 12}
// ]

// and an array of authors, for example:

// [
// {id: 1, first_name: 'Jazz', last_name: 'Callahan'},
// {id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
// {id: 3, first_name: 'Saron', last_name: 'Kim'},
// {id: 4, first_name: 'Teena', last_name: 'Burgess'},
// ]

// Return a new array of videos in the following format, and only include videos that have at least 100 views:

// [
// {title: 'How to Seem Perfect', views: 111, author_name: 'Teena Burgess' }
// {title: 'Review of the New "Unbreakable Mug"', views: 202, author_name: 'Ichabod Loadbearer' },
// ]

function etl(array, array2) {
  let i = 0;
  let newHash = [];

  while (i < array.length) {
    let j = 0;
    let author_name = `${array2[j]["first_name"]} ${array2[j]["last_name"]}`;

    while (j < array2.length) {
      if (
        array[i]["views"] > 100 &&
        array[i]["author_id"] === array2[j]["id"]
      ) {
        newHash.push({
          title: array[i]["title"],
          views: array[i]["views"],
          author_name: author_name,
        });
      }
      j += 1;
      if (j < array2.length) {
        author_name = `${array2[j]["first_name"]} ${array2[j]["last_name"]}`;
      }
    }
    i += 1;
  }
  return newHash;
}

console.log(
  etl(
    [
      { title: "How to Make Wood", author_id: 4, views: 6 },
      { title: "How to Seem Perfect", author_id: 4, views: 111 },
      {
        title: 'Review of the New "Unbreakable Mug"',
        author_id: 2,
        views: 202,
      },
      { title: "Why Pigs Stink", author_id: 1, views: 12 },
    ],
    [
      { id: 1, first_name: "Jazz", last_name: "Callahan" },
      { id: 2, first_name: "Ichabod", last_name: "Loadbearer" },
      { id: 3, first_name: "Saron", last_name: "Kim" },
      { id: 4, first_name: "Teena", last_name: "Burgess" },
    ]
  )
);
