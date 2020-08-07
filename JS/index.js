$("#form").submit(function (e) {
  e.preventDefault();

  var query = $("#search").val();

  var API_KEY = "16a84b472724948f35a91a9e35074243";

  var url =
    "http://api.serpstack.com/search?access_key=" +
    API_KEY +
    "&type=web&query=" +
    query;

  // console.log(url);

  $.get(url, function (data) {
    $("#result").html("");
    // console.log(data);

    data.organic_results.forEach((res) => {
      result = `
          <h1>${res.title}</h1><br><a target="_blank" href ="${res.url}">${res.url}</a>
          <p>${res.snippet}</p>`;
      $("#result").append(result);
    });
  });
});
