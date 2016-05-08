"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
	var inject, _dec, _class, BlurImageCustomAttribute, mul_table, shg_table, BLUR_RADIUS;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function stackBlurCanvasRGBA(canvas, top_x, top_y, width, height, radius) {
		if (isNaN(radius) || radius < 1) return;
		radius |= 0;

		var context = canvas.getContext("2d");
		var imageData;

		try {
			imageData = context.getImageData(top_x, top_y, width, height);
		} catch (e) {
			throw new Error("unable to access image data: " + e);
		}

		var pixels = imageData.data;

		var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;

		var div = radius + radius + 1;
		var w4 = width << 2;
		var widthMinus1 = width - 1;
		var heightMinus1 = height - 1;
		var radiusPlus1 = radius + 1;
		var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

		var stackStart = new BlurStack();
		var stack = stackStart;
		for (i = 1; i < div; i++) {
			stack = stack.next = new BlurStack();
			if (i == radiusPlus1) var stackEnd = stack;
		}
		stack.next = stackStart;
		var stackIn = null;
		var stackOut = null;

		yw = yi = 0;

		var mul_sum = mul_table[radius];
		var shg_sum = shg_table[radius];

		for (y = 0; y < height; y++) {
			r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

			r_out_sum = radiusPlus1 * (pr = pixels[yi]);
			g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
			b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
			a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			a_sum += sumFactor * pa;

			stack = stackStart;

			for (i = 0; i < radiusPlus1; i++) {
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack.a = pa;
				stack = stack.next;
			}

			for (i = 1; i < radiusPlus1; i++) {
				p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
				r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
				g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
				b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
				a_sum += (stack.a = pa = pixels[p + 3]) * rbs;

				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				a_in_sum += pa;

				stack = stack.next;
			}

			stackIn = stackStart;
			stackOut = stackEnd;
			for (x = 0; x < width; x++) {
				pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
				if (pa != 0) {
					pa = 255 / pa;
					pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
					pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
					pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
				} else {
					pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
				}

				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				a_sum -= a_out_sum;

				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				a_out_sum -= stackIn.a;

				p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;

				r_in_sum += stackIn.r = pixels[p];
				g_in_sum += stackIn.g = pixels[p + 1];
				b_in_sum += stackIn.b = pixels[p + 2];
				a_in_sum += stackIn.a = pixels[p + 3];

				r_sum += r_in_sum;
				g_sum += g_in_sum;
				b_sum += b_in_sum;
				a_sum += a_in_sum;

				stackIn = stackIn.next;

				r_out_sum += pr = stackOut.r;
				g_out_sum += pg = stackOut.g;
				b_out_sum += pb = stackOut.b;
				a_out_sum += pa = stackOut.a;

				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				a_in_sum -= pa;

				stackOut = stackOut.next;

				yi += 4;
			}
			yw += width;
		}

		for (x = 0; x < width; x++) {
			g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

			yi = x << 2;
			r_out_sum = radiusPlus1 * (pr = pixels[yi]);
			g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
			b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
			a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			a_sum += sumFactor * pa;

			stack = stackStart;

			for (i = 0; i < radiusPlus1; i++) {
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack.a = pa;
				stack = stack.next;
			}

			yp = width;

			for (i = 1; i <= radius; i++) {
				yi = yp + x << 2;

				r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
				g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
				b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
				a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;

				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				a_in_sum += pa;

				stack = stack.next;

				if (i < heightMinus1) {
					yp += width;
				}
			}

			yi = x;
			stackIn = stackStart;
			stackOut = stackEnd;
			for (y = 0; y < height; y++) {
				p = yi << 2;
				pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
				if (pa > 0) {
					pa = 255 / pa;
					pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
					pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
					pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
				} else {
					pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
				}

				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				a_sum -= a_out_sum;

				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				a_out_sum -= stackIn.a;

				p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;

				r_sum += r_in_sum += stackIn.r = pixels[p];
				g_sum += g_in_sum += stackIn.g = pixels[p + 1];
				b_sum += b_in_sum += stackIn.b = pixels[p + 2];
				a_sum += a_in_sum += stackIn.a = pixels[p + 3];

				stackIn = stackIn.next;

				r_out_sum += pr = stackOut.r;
				g_out_sum += pg = stackOut.g;
				b_out_sum += pb = stackOut.b;
				a_out_sum += pa = stackOut.a;

				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				a_in_sum -= pa;

				stackOut = stackOut.next;

				yi += width;
			}
		}

		context.putImageData(imageData, top_x, top_y);
	}

	function BlurStack() {
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.a = 0;
		this.next = null;
	}

	function drawBlur(canvas, image) {
		var w = canvas.width;
		var h = canvas.height;
		var canvasContext = canvas.getContext('2d');
		canvasContext.drawImage(image, 0, 0, w, h);
		stackBlurCanvasRGBA(canvas, 0, 0, w, h, BLUR_RADIUS);
	}return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			_export("BlurImageCustomAttribute", BlurImageCustomAttribute = (_dec = inject(Element), _dec(_class = function () {
				function BlurImageCustomAttribute(element) {
					_classCallCheck(this, BlurImageCustomAttribute);

					this.element = element;
				}

				BlurImageCustomAttribute.prototype.valueChanged = function valueChanged(newImage) {
					var _this = this;

					if (newImage.complete) {
						drawBlur(this.element, newImage);
					} else {
						newImage.onload = function () {
							return drawBlur(_this.element, newImage);
						};
					}
				};

				return BlurImageCustomAttribute;
			}()) || _class));

			_export("BlurImageCustomAttribute", BlurImageCustomAttribute);

			mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
			shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
			BLUR_RADIUS = 40;
			;
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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cEQsRUFJUixHQUpRLEVBSUosR0FKSSxFQUlBLEdBSkEsRUFJSSxHQUpKLEVBSVEsR0FKUixFQUlZLEdBSlosRUFJZ0IsR0FKaEIsRUFJb0IsR0FKcEIsRUFJd0IsR0FKeEIsRUFJNEIsR0FKNUIsRUFJZ0MsR0FKaEMsRUFJb0MsR0FKcEMsRUFJd0MsR0FKeEMsRUFJNEMsR0FKNUMsRUFJZ0QsR0FKaEQsRUFJb0QsR0FKcEQsRUFLUixHQUxRLEVBS0osR0FMSSxFQUtBLEdBTEEsRUFLSSxHQUxKLEVBS1EsR0FMUixFQUtZLEdBTFosRUFLZ0IsR0FMaEIsRUFLb0IsR0FMcEIsRUFLd0IsR0FMeEIsRUFLNEIsR0FMNUIsRUFLZ0MsR0FMaEMsRUFLb0MsR0FMcEMsRUFLd0MsR0FMeEMsRUFLNEMsR0FMNUMsRUFLZ0QsR0FMaEQsRUFLb0QsR0FMcEQsRUFNUixHQU5RLEVBTUosR0FOSSxFQU1BLEdBTkEsRUFNSSxHQU5KLEVBTVEsR0FOUixFQU1ZLEdBTlosRUFNZ0IsR0FOaEIsRUFNb0IsR0FOcEIsRUFNd0IsR0FOeEIsRUFNNEIsR0FONUIsRUFNZ0MsR0FOaEMsRUFNb0MsR0FOcEMsRUFNd0MsR0FOeEMsRUFNNEMsR0FONUMsRUFNZ0QsR0FOaEQsRUFNb0QsR0FOcEQsRUFPUixHQVBRLEVBT0osR0FQSSxFQU9BLEdBUEEsRUFPSSxHQVBKLEVBT1EsR0FQUixFQU9ZLEdBUFosRUFPZ0IsR0FQaEIsRUFPb0IsR0FQcEIsRUFPd0IsR0FQeEIsRUFPNEIsR0FQNUIsRUFPZ0MsR0FQaEMsRUFPb0MsR0FQcEMsRUFPd0MsR0FQeEMsRUFPNEMsR0FQNUMsRUFPZ0QsR0FQaEQsRUFPb0QsR0FQcEQsRUFRUixHQVJRLEVBUUosR0FSSSxFQVFBLEdBUkEsRUFRSSxHQVJKLEVBUVEsR0FSUixFQVFZLEdBUlosRUFRZ0IsR0FSaEIsRUFRb0IsR0FScEIsRUFRd0IsR0FSeEIsRUFRNEIsR0FSNUIsRUFRZ0MsR0FSaEMsRUFRb0MsR0FScEMsRUFRd0MsR0FSeEMsRUFRNEMsR0FSNUMsRUFRZ0QsR0FSaEQsRUFRb0QsR0FScEQsRUFTUixHQVRRLEVBU0osR0FUSSxFQVNBLEdBVEEsRUFTSSxHQVRKLEVBU1EsR0FUUixFQVNZLEdBVFosRUFTZ0IsR0FUaEIsRUFTb0IsR0FUcEIsRUFTd0IsR0FUeEIsRUFTNEIsR0FUNUIsRUFTZ0MsR0FUaEMsRUFTb0MsR0FUcEMsRUFTd0MsR0FUeEMsRUFTNEMsR0FUNUMsRUFTZ0QsR0FUaEQsRUFTb0QsR0FUcEQsRUFVUixHQVZRLEVBVUosR0FWSSxFQVVBLEdBVkEsRUFVSSxHQVZKLEVBVVEsR0FWUixFQVVZLEdBVlosRUFVZ0IsR0FWaEIsRUFVb0IsR0FWcEIsRUFVd0IsR0FWeEIsRUFVNEIsR0FWNUIsRUFVZ0MsR0FWaEMsRUFVb0MsR0FWcEMsRUFVd0MsR0FWeEMsRUFVNEMsR0FWNUMsRUFVZ0QsR0FWaEQsRUFVb0QsR0FWcEQsRUFXUixHQVhRLEVBV0osR0FYSSxFQVdBLEdBWEEsRUFXSSxHQVhKLEVBV1EsR0FYUixFQVdZLEdBWFosRUFXZ0IsR0FYaEIsRUFXb0IsR0FYcEIsRUFXd0IsR0FYeEIsRUFXNEIsR0FYNUIsRUFXZ0MsR0FYaEMsRUFXb0MsR0FYcEMsRUFXd0MsR0FYeEMsRUFXNEMsR0FYNUMsRUFXZ0QsR0FYaEQsRUFXb0QsR0FYcEQsRUFZUixHQVpRLEVBWUosR0FaSSxFQVlBLEdBWkEsRUFZSSxHQVpKLEVBWVEsR0FaUixFQVlZLEdBWlosRUFZZ0IsR0FaaEIsRUFZb0IsR0FacEIsRUFZd0IsR0FaeEIsRUFZNEIsR0FaNUIsRUFZZ0MsR0FaaEMsRUFZb0MsR0FacEMsRUFZd0MsR0FaeEMsRUFZNEMsR0FaNUMsRUFZZ0QsR0FaaEQsRUFZb0QsR0FacEQsRUFhUixHQWJRLEVBYUosR0FiSSxFQWFBLEdBYkEsRUFhSSxHQWJKLEVBYVEsR0FiUixFQWFZLEdBYlosRUFhZ0IsR0FiaEIsRUFhb0IsR0FicEIsRUFhd0IsR0FieEIsRUFhNEIsR0FiNUIsRUFhZ0MsR0FiaEMsRUFhb0MsR0FicEMsRUFhd0MsR0FieEMsRUFhNEMsR0FiNUMsRUFhZ0QsR0FiaEQsRUFhb0QsR0Fi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