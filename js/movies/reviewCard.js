let createReviewCard = (data) => {
  let reviewCard =
    '<div style="border-bottom: 1px solid #d4d4d4;" class="m-t-4">  \
  <a style="text-decoration: none; font-size: 1.2em; color: #6d0be1" href=' + data.url + '>' + data.author + '</a> \
  <p style="">' + data.content + '</p> \
    </div > \
  ';
  return reviewCard;
}