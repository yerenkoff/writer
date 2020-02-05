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
			return React.createElement("input", { value: this.props.val, ref: this.props.inputRef, autoFocus: true, required: true, autoCorrect: "off", className: "TextField " + this.props.className, name: this.props.name, type: "text", placeholder: this.props.labelName, onChange: this.props.onChange });
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
			return React.createElement("textarea", { ref: this.textInput, required: true, onChange: this.props.onChange, autoCorrect: "off", className: "TextField " + this.props.className, name: this.props.name, cols: "30", rows: "5", placeholder: this.props.labelName });
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
				this.state.label === "" ? "Картинки" : "Картинки" + " (" + this.state.label + ")",
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
		return _this4;
	}

	_createClass(ImageField, [{
		key: "handleLabel",
		value: function handleLabel(e) {
			console.log("handlelabel");
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
				this.state.label === "" ? "Картинка" : "Картинка" + " (" + this.state.label + ")",
				" ",
				React.createElement("input", { className: "forTest", accept: "image/*", required: true, onChange: this.props.onChange, name: this.props.name, type: "file" })
			);
		}
	}]);

	return ImageField;
}(React.Component);

var WritersList = function (_React$Component5) {
	_inherits(WritersList, _React$Component5);

	function WritersList(props) {
		_classCallCheck(this, WritersList);

		var _this5 = _possibleConstructorReturn(this, (WritersList.__proto__ || Object.getPrototypeOf(WritersList)).call(this, props));

		_this5.handleOver = _this5.handleOver.bind(_this5);
		_this5.handleLeave = _this5.handleLeave.bind(_this5);
		return _this5;
	}

	// The following handlers are for highlighting writers when you hover the cross-delete button


	_createClass(WritersList, [{
		key: "handleOver",
		value: function handleOver(e) {
			e.target.parentElement.children[0].style.border = '2px solid #222';
		}
	}, {
		key: "handleLeave",
		value: function handleLeave(e) {
			e.target.parentElement.children[0].style.border = '2px solid #aaa';
		}
	}, {
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
							{ onMouseOver: _this6.handleOver, onMouseLeave: _this6.handleLeave, className: "Button", value: Object.keys(_this6.props.writers)[index], onClick: _this6.props.handleDelete },
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
			h3Object: {},
			pObject: {},
			imgObject: {},
			addedCounter: 0,
			moreCounter: moreCounter
		};
		_this7.handleClick = _this7.handleClick.bind(_this7);
		_this7.addField = _this7.addField.bind(_this7);
		_this7.handleDelete = _this7.handleDelete.bind(_this7);
		_this7.handleMore = _this7.handleMore.bind(_this7);
		_this7.imagesField = React.createRef();
		_this7.rating = React.createRef();
		_this7.addedFields = {};
		_this7.imageField = {};
		return _this7;
	}

	// This removes focus from Rating input when page loaded


	_createClass(NewPost, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.rating.current.blur();
		}

		// Here I convey token and id to delete writer entry

	}, {
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
				// moreCounter - true or false - decides when to show "Ещё" button
				_this8.setState({ writers: result, moreCounter: res.moreCounter });
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
			// Here I convey image files one by one to FormData
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
				_this9.setState({ writers: result, moreCounter: res.moreCounter }, function () {});
			});
			this.imagesField.current.handleReset();
			this.setState({ h3Object: {} });
			this.setState({ pObject: {} });
			this.setState({ imgObject: {} });
		}
	}, {
		key: "addField",
		value: function addField(e) {
			var _setState;

			e.preventDefault();
			var target = e.target;
			var newObject = this.state[target.value + "Object"];
			newObject[this.state.addedCounter] = [target.name, target.value, ''];
			this.setState((_setState = {}, _defineProperty(_setState, target.value + "Object", newObject), _defineProperty(_setState, "addedCounter", this.state.addedCounter + 1), _setState));
		}
	}, {
		key: "deleteField",
		value: function deleteField(i, e) {
			e.preventDefault();
			var target = e.target;
			var newObject = this.state[target.name + "Object"];
			delete newObject[i];
			this.setState(_defineProperty({}, target.name + "Object", newObject));
			target.name === "img" && this.setState({ label: '' });
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
		key: "handleChange",
		value: function handleChange(i, e) {
			var target = e.target;
			var newObject = this.state[target.name + "Object"];
			newObject[i][2] = target.value;
			this.setState(_defineProperty({}, target.name + "Object", newObject));
			e.target.files != null && this.imageField[i].handleLabel(e);
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
					React.createElement(TextField, { inputRef: this.rating, labelName: "\u041E\u0446\u0435\u043D\u043A\u0430" }),
					React.createElement(ImagesField, { ref: this.imagesField }),
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
						Array(this.state.addedCounter).fill(null).map(function (name, index) {
							return _this11.state.h3Object[index] ? _this11.state.h3Object[index][0] === "bio" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(TextField, { val: _this11.state.h3Object[index][2], onChange: _this11.handleChange.bind(_this11, index), index: index, labelName: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", name: _this11.state.h3Object[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.h3Object[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "bio", "data-index": index },
									"\u2715"
								)
							) : null : _this11.state.pObject[index] ? _this11.state.pObject[index][0] === "bio" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(TextAreaField, { className: "TextAreaField", index: index, onChange: _this11.handleChange.bind(_this11, index), labelName: "\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444", name: _this11.state.pObject[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.pObject[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "bio", "data-index": index },
									"\u2715"
								)
							) : null : _this11.state.imgObject[index] ? _this11.state.imgObject[index][0] === "bio" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(ImageField, { ref: function ref(_ref) {
										return _this11.imageField["" + index] = _ref;
									}, onChange: _this11.handleChange.bind(_this11, index), index: index, name: _this11.state.imgObject[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.imgObject[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "bio", "data-index": index },
									"\u2715"
								)
							) : null : null;
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
						Array(this.state.addedCounter).fill(null).map(function (name, index) {
							return _this11.state.h3Object[index] ? _this11.state.h3Object[index][0] === "museums" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(TextField, { val: _this11.state.h3Object[index][2], onChange: _this11.handleChange.bind(_this11, index), index: index, labelName: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", name: _this11.state.h3Object[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.h3Object[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "museums", "data-index": index },
									"\u2715"
								)
							) : null : _this11.state.pObject[index] ? _this11.state.pObject[index][0] === "museums" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(TextAreaField, { className: "TextAreaField", index: index, onChange: _this11.handleChange.bind(_this11, index), labelName: "\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444", name: _this11.state.pObject[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.pObject[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "museums", "data-index": index },
									"\u2715"
								)
							) : null : _this11.state.imgObject[index] ? _this11.state.imgObject[index][0] === "museums" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(ImageField, { ref: function ref(_ref2) {
										return _this11.imageField["" + index] = _ref2;
									}, onChange: _this11.handleChange.bind(_this11, index), index: index, name: _this11.state.imgObject[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.imgObject[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "museums", "data-index": index },
									"\u2715"
								)
							) : null : null;
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
						Array(this.state.addedCounter).fill(null).map(function (name, index) {
							return _this11.state.h3Object[index] ? _this11.state.h3Object[index][0] === "beloved" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(TextField, { val: _this11.state.h3Object[index][2], onChange: _this11.handleChange.bind(_this11, index), index: index, labelName: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", name: _this11.state.h3Object[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.h3Object[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "beloved", "data-index": index },
									"\u2715"
								)
							) : null : _this11.state.pObject[index] ? _this11.state.pObject[index][0] === "beloved" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(TextAreaField, { className: "TextAreaField", index: index, onChange: _this11.handleChange.bind(_this11, index), labelName: "\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444", name: _this11.state.pObject[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.pObject[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "beloved", "data-index": index },
									"\u2715"
								)
							) : null : _this11.state.imgObject[index] ? _this11.state.imgObject[index][0] === "beloved" ? React.createElement(
								"section",
								{ key: index, className: "addedField" },
								React.createElement(ImageField, { ref: function ref(_ref3) {
										return _this11.imageField["" + index] = _ref3;
									}, onChange: _this11.handleChange.bind(_this11, index), index: index, name: _this11.state.imgObject[index][1] }),
								React.createElement(
									"button",
									{ name: _this11.state.imgObject[index][1], className: "Button", onClick: _this11.deleteField.bind(_this11, index), value: "beloved", "data-index": index },
									"\u2715"
								)
							) : null : null;
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