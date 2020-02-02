var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

info = JSON.parse(info);
import Mesh from './mesh.js';

var LiveSearch = function (_React$Component) {
  _inherits(LiveSearch, _React$Component);

  function LiveSearch() {
    _classCallCheck(this, LiveSearch);

    return _possibleConstructorReturn(this, (LiveSearch.__proto__ || Object.getPrototypeOf(LiveSearch)).apply(this, arguments));
  }

  _createClass(LiveSearch, [{
    key: "render",
    value: function render() {
      return React.createElement("input", { onChange: this.props.onChange, onFocus: this.props.onFocus, autoCorrect: "off", className: "LiveSearch", type: "text", placeholder: '"...' + Object.keys(info)[0] + '!"' });
    }
  }]);

  return LiveSearch;
}(React.Component);

var SearchResults = function (_React$Component2) {
  _inherits(SearchResults, _React$Component2);

  function SearchResults() {
    _classCallCheck(this, SearchResults);

    return _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).apply(this, arguments));
  }

  _createClass(SearchResults, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "section",
        { className: "SearchResults" },
        React.createElement(
          "button",
          { onClick: function onClick(e) {
              document.getElementsByClassName("LiveSearch")[0].value = '';_this3.props.onClose(e);
            } },
          "\u2A2F"
        ),
        React.createElement(
          "ul",
          null,
          this.props.searchResults.map(function (name, index) {
            return React.createElement(
              "a",
              { "data-surname": name[1], key: index, href: "#/", onClick: function onClick(e) {
                  _this3.props.onClick(e);e.preventDefault();
                } },
              name[0]
            );
          })
        )
      );
    }
  }]);

  return SearchResults;
}(React.Component);

var SortButton = function (_React$Component3) {
  _inherits(SortButton, _React$Component3);

  function SortButton() {
    _classCallCheck(this, SortButton);

    return _possibleConstructorReturn(this, (SortButton.__proto__ || Object.getPrototypeOf(SortButton)).apply(this, arguments));
  }

  _createClass(SortButton, [{
    key: "render",
    value: function render() {
      return React.createElement(Button, { onClick: this.props.onClick, inner: this.props.sortHeader, className: "SortButton" });
    }
  }]);

  return SortButton;
}(React.Component);

var Button = function (_React$Component4) {
  _inherits(Button, _React$Component4);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { id: this.props.id, "data-sort": this.props.sort, "data-p": this.props.p, onClick: this.props.onClick, className: "Button " + this.props.className },
        this.props.inner
      );
    }
  }]);

  return Button;
}(React.Component);

var SortList = function (_React$Component5) {
  _inherits(SortList, _React$Component5);

  function SortList() {
    _classCallCheck(this, SortList);

    return _possibleConstructorReturn(this, (SortList.__proto__ || Object.getPrototypeOf(SortList)).apply(this, arguments));
  }

  _createClass(SortList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "ul",
        { className: "SortList" },
        React.createElement(Button, { p: "country", sort: "\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u0442\u0440\u0430\u043D\u0443", onClick: this.props.onClick, inner: "\u0421\u0442\u0440\u0430\u043D\u0430", className: "SortListButton" }),
        React.createElement(Button, { p: "century", sort: "\u0412\u044B\u0431\u0435\u0440\u0438 \u0432\u0435\u043A", onClick: this.props.onClick, inner: "\u0412\u0435\u043A", className: "SortListButton" }),
        React.createElement(Button, { p: "rating", sort: "\u0412\u044B\u0431\u0435\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0443", onClick: this.props.onClick, inner: "\u041E\u0446\u0435\u043D\u043A\u0430", className: "SortListButton" })
      );
    }
  }]);

  return SortList;
}(React.Component);

var SortParameters = function (_React$Component6) {
  _inherits(SortParameters, _React$Component6);

  function SortParameters() {
    _classCallCheck(this, SortParameters);

    return _possibleConstructorReturn(this, (SortParameters.__proto__ || Object.getPrototypeOf(SortParameters)).apply(this, arguments));
  }

  _createClass(SortParameters, [{
    key: "render",
    value: function render() {
      var _this8 = this;

      return React.createElement(
        "ul",
        { className: "SortParameters" },
        this.props.parameter.map(function (p, index) {
          return React.createElement(Button, { key: index, inner: p, onClick: _this8.props.onClick });
        })
      );
    }
  }]);

  return SortParameters;
}(React.Component);

var H2 = function (_React$Component7) {
  _inherits(H2, _React$Component7);

  function H2() {
    _classCallCheck(this, H2);

    return _possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).apply(this, arguments));
  }

  _createClass(H2, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h2",
        { className: "H2" },
        this.props.inner
      );
    }
  }]);

  return H2;
}(React.Component);

var H4 = function (_React$Component8) {
  _inherits(H4, _React$Component8);

  function H4() {
    _classCallCheck(this, H4);

    return _possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).apply(this, arguments));
  }

  _createClass(H4, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        { onClick: this.props.onClick, className: "H4" },
        this.props.inner
      );
    }
  }]);

  return H4;
}(React.Component);

var WritersPreview = function (_React$Component9) {
  _inherits(WritersPreview, _React$Component9);

  function WritersPreview() {
    _classCallCheck(this, WritersPreview);

    return _possibleConstructorReturn(this, (WritersPreview.__proto__ || Object.getPrototypeOf(WritersPreview)).apply(this, arguments));
  }

  _createClass(WritersPreview, [{
    key: "render",
    value: function render() {
      var _this12 = this;

      return React.createElement(
        "main",
        { className: "WritersPreview" },
        this.props.writers.map(function (key, index) {
          return React.createElement(
            "section",
            { onClick: _this12.props.onClick, style: { backgroundImage: "url(" + info[key].images[0] + ")" }, key: index, className: "WriterPreview", "data-surname": key },
            React.createElement(
              "div",
              { onClick: function onClick(e) {
                  e.stopPropagation();
                }, className: "WriterPreviewInfo" },
              React.createElement(H2, { inner: info[key].surname }),
              React.createElement(H4, { key: index, inner: info[key].dates })
            ),
            React.createElement(H4, { onClick: function onClick(e) {
                e.stopPropagation();
              }, key: index, inner: [info[key].rating, React.createElement(
                "span",
                { key: index },
                "\u2605"
              )] })
          );
        }),
        !this.props.moreCounter && React.createElement(
          "div",
          { className: "moreButtonCont" },
          React.createElement(Button, { onClick: this.props.moreButton, id: "moreButton", inner: "\u0415\u0449\u0451" })
        )
      );
    }
  }]);

  return WritersPreview;
}(React.Component);

var Writer = function (_React$Component10) {
  _inherits(Writer, _React$Component10);

  function Writer(props) {
    _classCallCheck(this, Writer);

    var _this13 = _possibleConstructorReturn(this, (Writer.__proto__ || Object.getPrototypeOf(Writer)).call(this, props));

    _this13.state = {
      aboutOption: 'bio'
    };
    _this13.handleAbout = _this13.handleAbout.bind(_this13);
    _this13.plane = React.createRef();
    _this13.planeUniforms = {
      progress: 0,
      u_time: 0
    };
    return _this13;
  }

  _createClass(Writer, [{
    key: "handleAbout",
    value: function handleAbout(e) {
      var _this14 = this;

      var parameter = e.target.dataset.p;
      var show = function show() {
        document.getElementsByClassName("about")[0].style.opacity = 0;
        setTimeout(function () {
          _this14.setState({ aboutOption: parameter });
        }, 300);
        setTimeout(function () {
          document.getElementsByClassName("about")[0].style.opacity = 1;
        }, 400);
      };
      this.change = this.state.aboutOption === parameter ? 0 : show();
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      return React.createElement(
        "section",
        { className: "Writer" },
        React.createElement(
          "section",
          { className: "WriterBackground" },
          React.createElement(
            "div",
            { className: "back", onClick: this.props.onClick },
            React.createElement("img", { src: back, alt: "" })
          ),
          React.createElement(
            "ul",
            null,
            this.props.circles.map(function (key, index) {
              return index === _this15.props.edge % 3 ? React.createElement(
                "li",
                { key: index, className: "activeCircle" },
                "\u2B24"
              ) : React.createElement(
                "li",
                { key: index },
                "\u2B24"
              );
            })
          ),
          React.createElement(H4, { key: "0", inner: [info[this.props.writer].rating, React.createElement(
              "span",
              { key: "1" },
              "\u2605"
            )] }),
          React.createElement("canvas", { id: "c" })
        ),
        React.createElement(H4, { key: "2", inner: info[this.props.writer].name }),
        React.createElement(H2, { ref: this.plane, inner: info[this.props.writer].surname }),
        React.createElement(
          "ul",
          null,
          React.createElement(Button, { p: "bio", onClick: this.handleAbout, inner: "\u0411\u0438\u043E" }),
          React.createElement(Button, { p: "museums", onClick: this.handleAbout, inner: "\u041C\u0443\u0437\u0435\u0438" }),
          React.createElement(Button, { p: "beloved", onClick: this.handleAbout, inner: "\u042F \u043B\u044E\u0431\u043B\u044E" })
        ),
        React.createElement(
          "div",
          { className: "about" },
          Object.keys(info[this.props.writer][this.state.aboutOption]).map(function (name, index) {
            return React.createElement(info[_this15.props.writer][_this15.state.aboutOption][name][0], { key: index, src: info[_this15.props.writer][_this15.state.aboutOption][name][0] === "img" ? info[_this15.props.writer][_this15.state.aboutOption][name][1] : null }, info[_this15.props.writer][_this15.state.aboutOption][name][0] === "img" ? null : info[_this15.props.writer][_this15.state.aboutOption][name][1]);
          })
        )
      );
    }
  }]);

  return Writer;
}(React.Component);

var App = function (_React$Component11) {
  _inherits(App, _React$Component11);

  function App(props) {
    _classCallCheck(this, App);

    var _this16 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this16.parameters = {};

    _this16.state = {
      headerHidden: false,
      sortButtonHidden: false,
      sortingHidden: true,
      searchResults: [],
      parameter: [],
      parametersHidden: true,
      sortHeader: 'Фильтры',
      info: [],
      sortParameter: 'country',
      writer: Object.keys(info)[0],
      edge: 0,
      circles: [0, 1, 2],
      moreCounter: moreCounter
    };

    _this16.handleFocus = _this16.handleFocus.bind(_this16);
    _this16.handleSearch = _this16.handleSearch.bind(_this16);
    _this16.handleSortButton = _this16.handleSortButton.bind(_this16);
    _this16.handleSortListButton = _this16.handleSortListButton.bind(_this16);
    _this16.handleSortParameter = _this16.handleSortParameter.bind(_this16);
    _this16.handlePreview = _this16.handlePreview.bind(_this16);
    _this16.handleSearchLink = _this16.handleSearchLink.bind(_this16);
    _this16.componentDidMount = _this16.componentDidMount.bind(_this16);
    _this16.handleMore = _this16.handleMore.bind(_this16);
    return _this16;
  }

  _createClass(App, [{
    key: "getNewInfo",
    value: function getNewInfo() {
      var newInfo = [];
      Object.keys(info).map(function (key) {
        return newInfo.push(key);
      });
      return newInfo;
    }
  }, {
    key: "getNewParameters",
    value: function getNewParameters() {
      var _this17 = this;

      this.parameters["country"] = [];
      this.parameters["century"] = [];
      this.parameters["rating"] = [];
      Object.keys(info).map(function (name, index) {
        return _this17.parameters["country"].includes(info[name]["country"]) ? null : _this17.parameters["country"].push(info[name]["country"]);
      });
      Object.keys(info).map(function (name, index) {
        return _this17.parameters["century"].includes(info[name]["century"]) ? null : _this17.parameters["century"].push(info[name]["century"]);
      });
      Object.keys(info).map(function (name, index) {
        return _this17.parameters["rating"].includes(info[name]["rating"]) ? null : _this17.parameters["rating"].push(info[name]["rating"]);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this18 = this;

      this.getNewParameters();
      var newInfo = this.getNewInfo();
      this.setState({ info: newInfo });
      var gallery = info[this.state.writer].images;
      var position = 0;
      var edge = this.state.edge;
      var del = 0;

      var planeUniforms = {
        tex0: PIXI.Texture.from(info[this.state.writer].images[0]),
        tex1: PIXI.Texture.from(info[this.state.writer].images[1]),
        progress: 0,
        u_time: 0,
        indexy: document.getElementsByClassName("WritersPreview")[0].offsetWidth / 400 > 1 ? document.getElementsByClassName("WritersPreview")[0].offsetWidth / 400 * 0.1 : 0
      };

      var plane = new Mesh(document.getElementsByClassName("WritersPreview")[0], document.getElementById("c"), planeUniforms, document.getElementById("vertexShader").textContent, document.getElementById("fragmentPlane").textContent);
      var that = this;
      var ad = 0;
      var newGallery = void 0;
      plane.app.ticker.add(function (delta) {
        [].forEach.call(document.getElementsByClassName("WriterPreview"), function (el) {});
        edge = that.state.edge;
        ad += 0.1;
        newGallery = gallery !== info[that.state.writer].images;
        that.setState({ photoCounter: newGallery ? that.state.photoCounter : 0 });
        gallery = info[that.state.writer].images;

        plane.shader.uniforms.u_time = ad % 12.55;
        del = edge - position;
        position += del * 0.05;
        if (del < 0.02) {
          position = edge;
        }
        plane.shader.uniforms.progress = position;
        plane.shader.uniforms.tex0 = PIXI.Texture.from(gallery[newGallery ? 0 : Math.floor(position) % gallery.length]);
        plane.shader.uniforms.tex1 = PIXI.Texture.from(gallery[newGallery ? 0 : Math.floor(position + 1) % gallery.length]);
      });

      plane.app.view.onclick = function () {

        _this18.setState({ edge: _this18.state.edge + 1 });
      };
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      var show = function show() {
        Object.assign(document.getElementsByClassName("SearchResults")[0].style, { height: "100%", opacity: 1 });
      };
      var hide = function hide() {
        document.getElementsByClassName("SearchResults")[0].style.opacity = 0;setTimeout(function () {
          document.getElementsByClassName("SearchResults")[0].style.height = 0;
        }, 300);
      };
      this.style = e.target.tagName === "INPUT" ? show() : hide();
      this.setState({ searchResults: e.target.tagName === "INPUT" ? this.state.searchResults : [] });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var text = e.target.value;
      var results = [];
      for (var prop in info) {
        if (Object.prototype.hasOwnProperty.call(info, prop)) {
          if (text !== '' && (info[prop]["name"].toUpperCase().includes(text.toUpperCase()) || info[prop]["surname"].toUpperCase().includes(text.toUpperCase()))) {
            results.push([info[prop]["surname"], prop]);
          }
        }
      }
      this.setState({ searchResults: results });
    }
  }, {
    key: "showSorting",
    value: function showSorting(action) {
      var show = function show() {
        document.getElementsByClassName("SortList")[0].style.display = "block";
        setTimeout(function () {
          document.getElementsByClassName("SortList")[0].style.marginTop = "5px";
          document.getElementsByClassName("SortList")[0].style.maxHeight = "40px";
        }, 100);
        setTimeout(function () {
          document.getElementsByClassName("SortList")[0].style.opacity = 1;
        }, 200);
      };
      var hide = function hide() {
        document.getElementsByClassName("SortList")[0].style.opacity = 0;
        setTimeout(function () {
          document.getElementsByClassName("SortList")[0].style.maxHeight = 0;document.getElementsByClassName("SortList")[0].style.marginTop = 0;
        }, 100);
        setTimeout(function () {
          document.getElementsByClassName("SortList")[0].style.display = "none";
        }, 400);
      };
      this.style = action ? show() : hide();
    }
  }, {
    key: "showParameters",
    value: function showParameters(action, parameter) {
      this.setState({ parameter: parameter ? this.parameters[parameter] : this.state.parameter });
      var show = function show() {
        document.getElementsByClassName("SortParameters")[0].style.marginTop = "5px";document.getElementsByClassName("SortParameters")[0].style.maxHeight = "40px";setTimeout(function () {
          document.getElementsByClassName("SortParameters")[0].style.opacity = 1;
        }, 100);
      };
      var hide = function hide() {
        document.getElementsByClassName("SortParameters")[0].style.opacity = 0;setTimeout(function () {
          document.getElementsByClassName("SortParameters")[0].style.maxHeight = 0;document.getElementsByClassName("SortParameters")[0].style.marginTop = 0;
        }, 100);
      };
      this.style = action ? show() : hide();
      this.setState({ sortParameter: parameter });
    }
  }, {
    key: "showWritersPreview",
    value: function showWritersPreview(param) {
      var _this19 = this;

      var newInfo = this.getNewInfo().filter(function (writer) {
        return info[writer][_this19.state.sortParameter] === param;
      });
      var show = function show() {
        document.getElementsByClassName("WritersPreview")[0].style.opacity = 0;
        setTimeout(function () {
          var newInfo = _this19.getNewInfo().filter(function (writer) {
            return info[writer][_this19.state.sortParameter] === param;
          });
          _this19.setState({ info: newInfo });
          document.getElementsByClassName("WritersPreview")[0].style.opacity = 1;
        }, 300);
      };
      this.change = this.state.info.toString() === newInfo.toString() ? 0 : show();
    }
  }, {
    key: "showFull",
    value: function showFull(e) {
      var _this20 = this;

      e.stopPropagation();
      var writer = e.target.dataset.surname;
      var target = e.target;
      target.style.transform = target.tagName === "A" ? "scale(1)" : "scale(0.95)";
      document.getElementsByClassName("WritersPreview")[0].style.opacity = 0;
      setTimeout(function () {
        document.getElementsByClassName('container')[0].style.opacity = 0;
      }, 300);
      setTimeout(function () {
        _this20.setState({ writer: writer });
        document.getElementsByClassName('Writer')[0].style.display = "block";
      }, 300);
      setTimeout(function () {
        document.getElementsByClassName("WritersPreview")[0].style.display = "none";
        document.getElementById("root").scrollTo(0, 0);
        document.getElementsByClassName('container')[0].style.display = "none";
        document.getElementsByClassName('Writer')[0].style.opacity = 1;
        document.getElementsByClassName('Writer')[0].style.transform = "scale(1)";
        target.style.transform = "scale(1)";
      }, 600);
      this.setState({ edge: 0 });
    }
  }, {
    key: "handleBack",
    value: function handleBack() {
      document.getElementsByClassName('Writer')[0].style.opacity = 0;
      document.getElementsByClassName('Writer')[0].style.transform = "scale(0.95)";
      document.getElementsByClassName('WritersPreview')[0].style.transform = "scale(0.95)";
      setTimeout(function () {
        document.getElementsByClassName('WritersPreview')[0].style.display = "block";
        document.getElementsByClassName('container')[0].style.display = "block";
        document.getElementsByClassName("Writer")[0].style.display = "none";
        document.getElementById("root").scrollTo(0, 0);
      }, 300);
      setTimeout(function () {
        document.getElementsByClassName('WritersPreview')[0].style.transform = "scale(1)";
        document.getElementsByClassName('container')[0].style.opacity = 1;
        document.getElementsByClassName("WritersPreview")[0].style.opacity = 1;
      }, 400);
    }
  }, {
    key: "handleSortButton",
    value: function handleSortButton() {
      var _this21 = this;

      this.setState({ sortHeader: "Фильтры" });
      this.showSorting(this.state.sortingHidden);

      this.setState({ sortingHidden: !this.state.sortingHidden });

      this.showParameters(false);
      this.setState({ parametersHidden: true });
      var newInfo = this.getNewInfo();

      if (this.state.info.toString() !== newInfo.toString()) {
        document.getElementsByClassName("WritersPreview")[0].style.opacity = 0;
        setTimeout(function () {
          _this21.setState({ info: newInfo });
          document.getElementsByClassName("WritersPreview")[0].style.opacity = 1;
        }, 300);
      }
    }
  }, {
    key: "handleSortListButton",
    value: function handleSortListButton(e) {
      var _this22 = this;

      var p = e.target.dataset.p;
      this.setState({ sortHeader: e.target.dataset.sort });
      this.showSorting(this.state.sortingHidden);
      setTimeout(function () {
        _this22.showParameters(_this22.state.parametersHidden, p);
        _this22.setState({ parametersHidden: !_this22.state.parametersHidden });
      }, 300);
    }
  }, {
    key: "handleSortParameter",
    value: function handleSortParameter(e) {
      this.showWritersPreview(e.target.innerHTML);
    }
  }, {
    key: "handlePreview",
    value: function handlePreview(e) {
      this.showFull(e);
    }
  }, {
    key: "handleSearchLink",
    value: function handleSearchLink(e) {
      var _this23 = this;

      this.showFull(e);
      setTimeout(function () {
        document.getElementsByClassName("SearchResults")[0].style.height = 0;
        document.getElementsByClassName("SearchResults")[0].style.opacity = 0;
        _this23.setState({ searchResults: [] });
        document.getElementsByClassName("LiveSearch")[0].value = '';
      }, 600);
      this.setState({ writer: e.target.dataset.surname });
    }
  }, {
    key: "handleMore",
    value: function handleMore() {
      var _this24 = this;

      fetch('/more/').then(function (response) {
        return response.json();
      }).then(function (myJson) {
        info = myJson.data;
        _this24.getNewParameters();
        var newInfo = _this24.getNewInfo();
        _this24.setState({ info: newInfo });
        _this24.setState({ moreCounter: myJson.moreCounter });
      }).catch(function (error) {
        console.error('There has been a problem with your fetch operation:', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "a",
            { href: "/", className: "h1_a" },
            React.createElement(
              "h1",
              null,
              "Beloved Writers"
            )
          ),
          React.createElement(LiveSearch, { onChange: this.handleSearch, onFocus: this.handleFocus }),
          React.createElement(SearchResults, { onClick: this.handleSearchLink, searchResults: this.state.searchResults, onClose: this.handleFocus }),
          React.createElement(SortButton, { sortHeader: this.state.sortHeader, onClick: this.handleSortButton }),
          React.createElement(SortList, { onClick: this.handleSortListButton }),
          React.createElement(SortParameters, { parameter: this.state.parameter, onClick: this.handleSortParameter })
        ),
        React.createElement(WritersPreview, { moreCounter: this.state.moreCounter, moreButton: this.handleMore, onClick: this.handlePreview, writers: this.state.info }),
        React.createElement(Writer, { circles: this.state.circles, edge: this.state.edge, onClick: this.handleBack, writer: this.state.writer })
      );
    }
  }]);

  return App;
}(React.Component);

var Initial = function (_React$Component12) {
  _inherits(Initial, _React$Component12);

  function Initial() {
    _classCallCheck(this, Initial);

    return _possibleConstructorReturn(this, (Initial.__proto__ || Object.getPrototypeOf(Initial)).apply(this, arguments));
  }

  _createClass(Initial, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container Initial" },
        React.createElement(
          "a",
          { href: "/", className: "h1_a" },
          React.createElement(
            "h1",
            null,
            "Beloved Writers"
          )
        ),
        React.createElement(H4, { inner: "\u0414\u043E\u0431\u0430\u0432\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u0413\u043E\u0433\u043E\u043B\u044F..." }),
        React.createElement(
          "a",
          { href: "/admin" },
          React.createElement(Button, { inner: "\u0412 \u0430\u0434\u043C\u0438\u043D\u043A\u0443" })
        )
      );
    }
  }]);

  return Initial;
}(React.Component);

ReactDOM.render(Object.keys(info).length !== 0 ? React.createElement(App, null) : React.createElement(Initial, null), document.getElementById('root'));