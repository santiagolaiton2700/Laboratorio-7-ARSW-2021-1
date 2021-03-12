var apimock = (function () {
  var mockdata = [];
  

  mockdata["Santiago"] = [
    {
      author: "Santiago",
      name: "house",
      points: [
        {
          x: 100,
          y: 100,
        },
		
        {
          x: 100,
          y: 300,
        },
        {
          x: 200,
          y: 400,
        },
        {
          x: 300,
          y: 300,
        },
        {
          x: 300,
          y: 100,
        },
        {
          x: 100,
          y: 100,
        },
        {
          x: 100,
          y: 300,
        },
        {
          x: 300,
          y: 300,
        },
      ],
    },
    {
      author: "Santiago",
      name: "Cometa",
      points: [
        {
          x: 200,
          y: 400,
        },
        {
          x: 100,
          y: 500,
        },
        {
          x: 100,
          y: 600,
        },
        {
          x: 200,
          y: 500,
        },
        {
          x: 300,
          y: 600,
        },
        {
          x: 300,
          y: 500,
        },
        {
          x: 200,
          y: 400,
        },
        {
          x: 300,
          y: 300,
        },
        {
          x: 200,
          y: 300,
        },
        {
          x: 200,
          y: 200,
        },
        {
          x: 300,
          y: 100,
        },
        {
          x: 500,
          y: 100,
        },
        {
          x: 500,
          y: 300,
        },
        {
          x: 400,
          y: 400,
        },
        {
          x: 300,
          y: 300,
        },
      ],
    },
    {
      author: "Santiago",
      name: "Pera",
      points: [
        {
          x: 200,
          y: 100,
        },
        {
          x: 100,
          y: 200,
        },
        {
          x: 100,
          y: 300,

        },
        {
          x: 200,
          y: 400,

        },
        {
          x: 200,
          y: 500,
        },
        {
          x: 300,
          y: 600,
        },
        {
          x: 400,
          y: 500,
        },
        {
          x: 400,
          y: 400,
        },
        {
          x: 500,
          y: 300,
        },
        {
          x: 500,
          y: 200,
        },
        {
          x: 400,
          y: 100,
        },
        {
          x: 200,
          y: 100,
        },
        {
          x: 300,
          y: 600,
        },
        {
          x: 500,
          y: 600,
        },
        {
          x: 600,
          y: 500,
        },
        {
          x: 500,
          y: 500,
        },
        {
          x: 400,
          y: 600,
        },
      ],
    },
  ];
  mockdata["Jose"] = [
    {
      author: "Jose",
      name: "kryptonite",
      points: [
        {
          x: 60,
          y: 65,
        },
        {
          x: 70,
          y: 75,
        },
      ],
    },
    {
      author: "Jose",
      name: "pool",
      points: [
        {
          x: 60,
          y: 65,
        },
        {
          x: 7,
          y: 5,
        },
        {
          x: 19,
          y: 46,
        },
        {
          x: 190,
          y: 460,
        },
        {
          x: 64,
          y: 102,
        },
      ],
    },
  ];

  var getBlueprintsByAuthor = function (author, callback) {
    callback(mockdata[author]);
  };

  var getBlueprintsByNameAndAuthor = function (
    author,
    nameBlueprint,
    callback
  ) {
    callback(mockdata[author].find((obj) => obj.name === nameBlueprint));
  };
  var setPoint=function(bluePrint,list){
    console.log(bluePrint)
    console.log(list)
    var hola=mockdata[bluePrint.author].find((obj)=>obj.name===bluePrint.name);
    console.log(hola);
  }


  return {
    getBlueprintsByAuthor: getBlueprintsByAuthor,
    getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor,
    setPoint:setPoint
  };
})();
