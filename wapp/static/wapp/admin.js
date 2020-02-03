var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_React$Component) {
	_inherits(TextField, _React$Component);

	function TextField(props) {
		_classCallCheck(this, TextField);

		return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));
	}

	_createClass(TextField, [{
		key: "render",
		value: function render() {
			return React.createElement("input", { required: true, autoCorrect: "off", className: "TextField " + this.props.className, "data-index": this.props.index, name: this.props.name, type: "text", placeholder: this.props.labelName });
		}
	}]);

	return TextField;
}(React.Component);

var TextAreaField = function (_React$Component2) {
	_inherits(TextAreaField, _React$Component2);

	function TextAreaField(props) {
		_classCallCheck(this, TextAreaField);

		var _this2 = _possibleConstructorReturn(this, (TextAreaField.__proto__ || Object.getPrototypeOf(TextAreaField)).call(this, props));

		_this2.textInput = React.createRef();
		return _this2;
	}

	_createClass(TextAreaField, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.textInput.current.focus();
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement("textarea", { ref: this.textInput, required: true, autoCorrect: "off", className: "TextField " + this.props.className, "data-index": this.props.index, name: this.props.name, cols: "30", rows: "5", placeholder: this.props.labelName });
		}
	}]);

	return TextAreaField;
}(React.Component);

var ImagesField = function (_React$Component3) {
	_inherits(ImagesField, _React$Component3);

	function ImagesField(props) {
		_classCallCheck(this, ImagesField);

		var _this3 = _possibleConstructorReturn(this, (ImagesField.__proto__ || Object.getPrototypeOf(ImagesField)).call(this, props));

		_this3.state = {
			label: ""
		};
		_this3.handleImages = _this3.handleImages.bind(_this3);
		return _this3;
	}

	_createClass(ImagesField, [{
		key: "handleReset",
		value: function handleReset() {
			this.setState({ label: "" });
		}
	}, {
		key: "handleImages",
		value: function handleImages(e) {
			this.setState({ label: Object.values(e.target.files).length >= 2 ? Object.values(e.target.files).map(function (key) {
					return key.name;
				}).join(', ') : "Минимум два файла!" });
			function redLine() {
				e.target.parentElement.classList.add("redLine");
				e.target.value = null;
			}
			Object.values(e.target.files).length >= 2 ? e.target.parentElement.classList.remove("redLine") : redLine();
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"label",
				{ className: "ImagesField Button" },
				this.state.label === "" ? this.props.labelName : this.props.labelName + " (" + this.state.label + ")",
				" ",
				React.createElement("input", { accept: "image/*", required: true, onChange: this.handleImages, name: this.props.name, type: "file", multiple: true })
			);
		}
	}]);

	return ImagesField;
}(React.Component);

var ImageField = function (_React$Component4) {
	_inherits(ImageField, _React$Component4);

	function ImageField(props) {
		_classCallCheck(this, ImageField);

		var _this4 = _possibleConstructorReturn(this, (ImageField.__proto__ || Object.getPrototypeOf(ImageField)).call(this, props));

		_this4.state = {
			label: ""
		};
		_this4.handleImages = _this4.handleImages.bind(_this4);
		return _this4;
	}

	_createClass(ImageField, [{
		key: "handleReset",
		value: function handleReset() {
			this.setState({ label: "" });
		}
	}, {
		key: "handleImages",
		value: function handleImages(e) {
			this.setState({ label: Object.values(e.target.files).map(function (key) {
					return key.name;
				}).join(', ') });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"label",
				{ className: "ImagesField Button " + this.props.className },
				this.state.label === "" ? this.props.labelName : this.props.labelName + " (" + this.state.label + ")",
				" ",
				React.createElement("input", { accept: "image/*", required: true, onChange: this.handleImages, "data-index": this.props.index, name: this.props.name, type: "file" })
			);
		}
	}]);

	return ImageField;
}(React.Component);

var WritersList = function (_React$Component5) {
	_inherits(WritersList, _React$Component5);

	function WritersList() {
		_classCallCheck(this, WritersList);

		return _possibleConstructorReturn(this, (WritersList.__proto__ || Object.getPrototypeOf(WritersList)).apply(this, arguments));
	}

	_createClass(WritersList, [{
		key: "render",
		value: function render() {
			var _this6 = this;

			return React.createElement(
				"section",
				{ className: this.props.className },
				React.createElement(
					"h2",
					null,
					Object.keys(this.props.writers).length === 0 ? "Здесь будет таблица с писателями" : "Добавленные писатели"
				),
				Object.keys(this.props.writers).map(function (writer, index) {
					return React.createElement(
						"section",
						{ key: index },
						React.createElement("img", { src: _this6.props.writers[writer].images[0], alt: "" }),
						React.createElement(
							"h4",
							null,
							_this6.props.writers[writer].name,
							" ",
							_this6.props.writers[writer].surname
						),
						React.createElement(
							"button",
							{ className: "Button", value: Object.keys(_this6.props.writers)[index], onClick: _this6.props.handleDelete },
							"\u2715"
						)
					);
				}),
				!this.props.moreCounter && React.createElement(
					"div",
					{ className: "moreButtonCont" },
					React.createElement(
						"button",
						{ className: "Button", id: "moreButton", onClick: this.props.onClick },
						"\u0415\u0449\u0451"
					)
				)
			);
		}
	}]);

	return WritersList;
}(React.Component);

var NewPost = function (_React$Component6) {
	_inherits(NewPost, _React$Component6);

	function NewPost(props) {
		_classCallCheck(this, NewPost);

		var _this7 = _possibleConstructorReturn(this, (NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call(this, props));

		_this7.state = {
			writers: writers,
			bio: [],
			museums: [],
			beloved: [],
			moreCounter: moreCounter
		};
		_this7.handleClick = _this7.handleClick.bind(_this7);
		_this7.addField = _this7.addField.bind(_this7);
		_this7.deleteField = _this7.deleteField.bind(_this7);
		_this7.handleDelete = _this7.handleDelete.bind(_this7);
		_this7.handleMore = _this7.handleMore.bind(_this7);
		_this7.imagesField = React.createRef();
		// this.imageField = {};
		return _this7;
	}

	_createClass(NewPost, [{
		key: "handleDelete",
		value: function handleDelete(e) {
			var _this8 = this;

			e.preventDefault();
			var t = e.target;
			var data = new FormData();
			data.append('csrfmiddlewaretoken', token);
			data.append('id', t.value);
			var result = void 0;
			confirm("Удалить запись о писателе?") ? fetch("/delete/", {
				method: 'POST',
				body: data,
				credentials: 'same-origin'
			}).then(function (res) {
				return res.json();
			}).then(function (res) {
				result = res.data;
				_this8.setState({ writers: result });
				_this8.setState({ moreCounter: res.moreCounter });
			}) : null;
		}
	}, {
		key: "handleClick",
		value: function handleClick(e) {
			var _this9 = this;

			e.preventDefault();
			var data = new FormData();
			var inputs = document.getElementsByTagName("input");
			var info = {
				"writer": {
					surname: inputs[0].value,
					name: inputs[1].value,
					century: inputs[2].value,
					dates: inputs[3].value,
					country: inputs[4].value,
					rating: inputs[5].value,
					images: Object.keys(inputs[6].files),
					bio: {},
					museums: {},
					beloved: {}
				}
			};

			[].forEach.call(document.getElementsByClassName("categories"), function (el, index) {
				var counter = 0;
				[].forEach.call(el.querySelectorAll("input, textarea"), function (inp) {
					index == 0 ? info["writer"].bio[counter] = [inp.name, inp.value] : index == 1 ? info["writer"].museums[counter] = [inp.name, inp.value] : info["writer"].beloved[counter] = [inp.name, inp.value];
					if (inp.name === "img") {
						data.append(index == 0 ? 'bioImage' : index == 1 ? 'museumsImage' : 'belovedImage', inp.files[0]);
					}
					counter++;
				});
			});

			data.append('info', JSON.stringify(info));
			Object.keys(inputs[6].files).forEach(function (key) {

				data.append('image', inputs[6].files[key]);
			});

			data.append('csrfmiddlewaretoken', token);
			var result = void 0;
			fetch("/newPost/", {
				method: 'POST',
				body: data,
				credentials: 'same-origin'
			}).then(function (res) {
				return res.json();
			}).then(function (res) {
				result = res.data;
				_this9.setState({ writers: result }, function () {});
			});
			document.getElementById("NewPost").reset();
			this.imagesField.current.handleReset();
			// Object.keys(this.imageField).forEach((key) => {
			// 	console.log(this.imageField[key]);
			// 	this.imageField[key] != null && this.imageField[key].handleReset();
			// });
			// ref={(ref) => this.imageField[`bio${index}`] = ref} 
			this.setState({ 'bio': [] });
			this.setState({ 'museums': [] });
			this.setState({ 'beloved': [] });
		}
	}, {
		key: "addField",
		value: function addField(e) {
			e.preventDefault();
			var field = [e.target.value];
			var fields = this.state[e.target.name].slice().concat(field);
			this.setState(_defineProperty({}, e.target.name, fields));
			console.log(this.imageField);
		}
	}, {
		key: "deleteField",
		value: function deleteField(e) {
			e.preventDefault();
			var fields = this.state[e.target.value].slice();
			fields.splice(e.target.dataset.index, 1);
			this.setState(_defineProperty({}, e.target.value, fields));
		}
	}, {
		key: "handleMore",
		value: function handleMore() {
			var _this10 = this;

			fetch('/more/').then(function (response) {
				return response.json();
			}).then(function (myJson) {
				_this10.setState({ writers: myJson.data });
				_this10.setState({ moreCounter: myJson.moreCounter });
			}).catch(function (error) {
				console.error('There has been a problem with your fetch operation:', error);
			});
		}
	}, {
		key: "handleExit",
		value: function handleExit() {
			location.href = "/exit/";
		}
	}, {
		key: "render",
		value: function render() {
			var _this11 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"header",
					null,
					React.createElement(
						"button",
						{ className: "Button", onClick: this.handleExit },
						"\u0412\u044B\u0439\u0442\u0438"
					),
					React.createElement(
						"h1",
						null,
						"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044F"
					)
				),
				React.createElement(
					"form",
					{ id: "NewPost", action: "", type: "post", onSubmit: this.handleClick },
					React.createElement(TextField, { labelName: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F" }),
					React.createElement(TextField, { labelName: "\u0418\u043C\u044F" }),
					React.createElement(TextField, { labelName: "\u0412\u0435\u043A" }),
					React.createElement(TextField, { labelName: "\u0413\u043E\u0434\u044B \u0436\u0438\u0437\u043D\u0438" }),
					React.createElement(TextField, { labelName: "C\u0442\u0440\u0430\u043D\u0430" }),
					React.createElement(TextField, { labelName: "\u041E\u0446\u0435\u043D\u043A\u0430" }),
					React.createElement(ImagesField, { ref: this.imagesField, labelName: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0438" }),
					React.createElement(
						"div",
						{ className: "categories" },
						React.createElement(
							"h2",
							null,
							"\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F"
						),
						React.createElement(
							"div",
							{ className: "addField" },
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "bio", value: "h3" },
								"+\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
							),
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "bio", value: "p" },
								"+\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444"
							),
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "bio", value: "img" },
								"+\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
							)
						),
						this.state.bio.map(function (name, index) {
							return React.createElement(
								"section",
								{ key: index, className: "addedField" },
								name === "img" ? React.createElement(ImageField, { index: index, labelName: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430", name: name }) : name === "h3" ? React.createElement(TextField, { index: index, labelName: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", name: name }) : React.createElement(TextAreaField, { className: "TextAreaField", index: index, labelName: "\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444", name: name }),
								React.createElement(
									"button",
									{ className: "Button", onClick: _this11.deleteField, value: "bio", "data-index": index },
									"\u2715"
								)
							);
						})
					),
					React.createElement(
						"div",
						{ className: "categories" },
						React.createElement(
							"h2",
							null,
							"\u041C\u0443\u0437\u0435\u0438"
						),
						React.createElement(
							"div",
							{ className: "addField" },
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "museums", value: "h3" },
								"+\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
							),
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "museums", value: "p" },
								"+\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444"
							),
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "museums", value: "img" },
								"+\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
							)
						),
						this.state.museums.map(function (name, index) {
							return React.createElement(
								"section",
								{ key: index, className: "addedField" },
								name === "img" ? React.createElement(ImageField, { index: index, labelName: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430", name: name }) : name === "h3" ? React.createElement(TextField, { index: index, labelName: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", name: name }) : React.createElement(TextAreaField, { className: "TextAreaField", index: index, labelName: "\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444", name: name }),
								React.createElement(
									"button",
									{ className: "Button", onClick: _this11.deleteField, value: "museums", "data-index": index },
									"\u2715"
								)
							);
						})
					),
					React.createElement(
						"div",
						{ className: "categories" },
						React.createElement(
							"h2",
							null,
							"\u041B\u044E\u0431\u0438\u043C\u043E\u0435"
						),
						React.createElement(
							"div",
							{ className: "addField" },
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "beloved", value: "h3" },
								"+\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
							),
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "beloved", value: "p" },
								"+\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444"
							),
							React.createElement(
								"button",
								{ className: "Button", onClick: this.addField, name: "beloved", value: "img" },
								"+\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
							)
						),
						this.state.beloved.map(function (name, index) {
							return React.createElement(
								"section",
								{ key: index, className: "addedField" },
								name === "img" ? React.createElement(ImageField, { index: index, labelName: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430", name: name }) : name === "h3" ? React.createElement(TextField, { index: index, labelName: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", name: name }) : React.createElement(TextAreaField, { className: "TextAreaField", index: index, labelName: "\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444", name: name }),
								React.createElement(
									"button",
									{ className: "Button", onClick: _this11.deleteField, value: "beloved", "data-index": index },
									"\u2715"
								)
							);
						})
					),
					React.createElement(
						"button",
						{ className: "Button submitButton", type: "submit" },
						"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044F"
					)
				),
				React.createElement(WritersList, { moreCounter: this.state.moreCounter, onClick: this.handleMore, className: "WritersList", handleDelete: this.handleDelete, writers: this.state.writers })
			);
		}
	}]);

	return NewPost;
}(React.Component);

ReactDOM.render(React.createElement(NewPost, null), document.getElementById('root'));