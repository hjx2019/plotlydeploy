function init() {
  var selector = d3.select("#selDataset");
    //Which JavaScript method is used to iterate through the keys and values of an object?
  // Object.entries()   //returns an Aray
  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
  })
}

init();
