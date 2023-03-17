import { ref as S, onMounted as Q, onBeforeUnmount as be, openBlock as a, createElementBlock as f, renderSlot as y, watch as U, createBlock as x, withCtx as C, createElementVNode as s, normalizeClass as $, withModifiers as B, withDirectives as D, vShow as R, resolveDynamicComponent as j, toDisplayString as v, createCommentVNode as k, computed as _, Fragment as P, renderList as O, unref as t, createVNode as z, createTextVNode as V, nextTick as ye, getCurrentInstance as we, onUnmounted as xe, Transition as ke } from "vue";
import { createPopper as _e } from "@popperjs/core/lib/popper-lite";
import $e from "@popperjs/core/lib/modifiers/preventOverflow";
import Ce from "@popperjs/core/lib/modifiers/flip";
import Se from "lodash-es/uniq";
import qe from "lodash-es/find";
import K from "qs";
import Be from "lodash-es/clone";
import Fe from "lodash-es/filter";
import Pe from "lodash-es/findKey";
import T from "lodash-es/forEach";
import Oe from "lodash-es/isEqual";
import Te from "lodash-es/map";
import Ie from "lodash-es/pickBy";
const je = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, c = S(null), d = S(null);
    return Q(() => {
      c.value = (h) => {
        h.target === d.value || d.value.contains(h.target) || o.do();
      }, document.addEventListener("click", c.value), document.addEventListener("touchstart", c.value);
    }), be(() => {
      document.removeEventListener("click", c.value), document.removeEventListener("touchstart", c.value);
    }), (h, r) => (a(), f("div", {
      ref_key: "root",
      ref: d
    }, [
      y(h.$slots, "default")
    ], 512));
  }
}, Ve = { class: "relative" }, Le = ["dusk", "disabled", "onClick"], Me = { class: "mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" }, Y = {
  __name: "ButtonWithDropdown",
  props: {
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    active: {
      type: Boolean,
      default: !1,
      required: !1
    },
    dusk: {
      type: String,
      default: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  setup(e, { expose: o }) {
    const c = e, d = S(!1), h = S(null);
    function r() {
      d.value = !d.value;
    }
    function l() {
      d.value = !1;
    }
    U(d, () => {
      h.value.update();
    });
    const g = S(null), m = S(null);
    return Q(() => {
      h.value = _e(g.value, m.value, {
        placement: c.placement,
        modifiers: [Ce, $e]
      });
    }), o({ hide: l }), (F, q) => (a(), x(je, { do: l }, {
      default: C(() => [
        s("div", Ve, [
          s("button", {
            ref_key: "button",
            ref: g,
            type: "button",
            dusk: e.dusk,
            disabled: e.disabled,
            class: $(["w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", { "border-green-300": e.active, "border-gray-300": !e.active, "cursor-not-allowed": e.disabled }]),
            "aria-haspopup": "true",
            onClick: B(r, ["prevent"])
          }, [
            y(F.$slots, "button")
          ], 10, Le),
          D(s("div", {
            ref_key: "tooltip",
            ref: m,
            class: "absolute z-10"
          }, [
            s("div", Me, [
              y(F.$slots, "default")
            ])
          ], 512), [
            [R, d.value]
          ])
        ])
      ]),
      _: 3
    }));
  }
}, ze = { class: "flex flex-row items-center" }, De = { class: "uppercase" }, Re = ["sorted"], Ee = {
  key: 0,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, Ne = {
  key: 1,
  fill: "currentColor",
  d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
}, We = {
  key: 2,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, Ae = {
  __name: "HeaderCell",
  props: {
    cell: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const o = e;
    function c() {
      o.cell.sortable && o.cell.onSort(o.cell.key);
    }
    return (d, h) => D((a(), f("th", null, [
      (a(), x(j(e.cell.sortable ? "button" : "div"), {
        class: "py-3 px-6 w-full",
        dusk: e.cell.sortable ? `sort-${e.cell.key}` : null,
        onClick: B(c, ["prevent"])
      }, {
        default: C(() => [
          s("span", ze, [
            y(d.$slots, "label", {}, () => [
              s("span", De, v(e.cell.label), 1)
            ]),
            y(d.$slots, "sort", {}, () => [
              e.cell.sortable ? (a(), f("svg", {
                key: 0,
                "aria-hidden": "true",
                class: $(["w-3 h-3 ms-2", {
                  "text-gray-400": !e.cell.sorted,
                  "text-green-500": e.cell.sorted
                }]),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 320 512",
                sorted: e.cell.sorted
              }, [
                e.cell.sorted ? k("", !0) : (a(), f("path", Ee)),
                e.cell.sorted === "asc" ? (a(), f("path", Ne)) : k("", !0),
                e.cell.sorted === "desc" ? (a(), f("path", We)) : k("", !0)
              ], 10, Re)) : k("", !0)
            ])
          ])
        ]),
        _: 3
      }, 8, ["dusk", "onClick"]))
    ], 512)), [
      [R, !e.cell.hidden]
    ]);
  }
}, J = {
  translations: {
    next: "Next",
    no_results_found: "No results found",
    of: "of",
    per_page: "per page",
    previous: "Previous",
    results: "results",
    to: "to"
  }
};
function ce() {
  return J.translations;
}
function Fr(e, o) {
  J.translations[e] = o;
}
function Pr(e) {
  J.translations = e;
}
const He = ["dusk", "value"], Ge = ["value"], ie = {
  __name: "PerPageSelector",
  props: {
    dusk: {
      type: String,
      default: null,
      required: !1
    },
    value: {
      type: Number,
      default: 15,
      required: !1
    },
    options: {
      type: Array,
      default() {
        return [15, 30, 50, 100];
      },
      required: !1
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, c = ce(), d = _(() => {
      let h = [...o.options];
      return h.push(parseInt(o.value)), Se(h).sort((r, l) => r - l);
    });
    return (h, r) => (a(), f("select", {
      name: "per_page",
      dusk: e.dusk,
      value: e.value,
      class: "block focus:ring-indigo-500 focus:border-indigo-500 min-w-max shadow-sm text-sm border-gray-300 rounded-md",
      onChange: r[0] || (r[0] = (l) => e.onChange(l.target.value))
    }, [
      (a(!0), f(P, null, O(t(d), (l) => (a(), f("option", {
        key: l,
        value: l
      }, v(l) + " " + v(t(c).per_page), 9, Ge))), 128))
    ], 40, He));
  }
}, Ke = {
  key: 0,
  class: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
}, Qe = { key: 0 }, Ue = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
  })
], -1), Ye = { class: "hidden sm:inline ms-2" }, Je = { class: "hidden sm:inline me-2" }, Xe = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M17 8l4 4m0 0l-4 4m4-4H3"
  })
], -1), Ze = {
  key: 2,
  class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
}, et = { class: "flex flex-row space-x-4 items-center flex-grow" }, tt = { class: "hidden lg:block text-sm text-gray-700 flex-grow p-4" }, rt = { class: "font-medium" }, nt = { class: "font-medium" }, lt = { class: "font-medium" }, st = { dir: "ltr" }, at = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, ot = { class: "sr-only" }, ut = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1), it = { class: "sr-only" }, ct = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    "clip-rule": "evenodd"
  })
], -1), dt = {
  __name: "Pagination",
  props: {
    onClick: {
      type: Function,
      required: !1
    },
    perPageOptions: {
      type: Array,
      default() {
        return () => [15, 30, 50, 100];
      },
      required: !1
    },
    onPerPageChange: {
      type: Function,
      default() {
        return () => {
        };
      },
      required: !1
    },
    hasData: {
      type: Boolean,
      required: !0
    },
    meta: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    const o = e, c = ce(), d = _(() => "links" in r.value ? r.value.links.length > 0 : !1), h = _(() => Object.keys(r.value).length > 0), r = _(() => o.meta), l = _(() => "prev_page_url" in r.value ? r.value.prev_page_url : null), g = _(() => "next_page_url" in r.value ? r.value.next_page_url : null), m = _(() => parseInt(r.value.per_page));
    return (F, q) => t(h) ? (a(), f("nav", Ke, [
      !e.hasData || t(r).total < 1 ? (a(), f("p", Qe, v(t(c).no_results_found), 1)) : k("", !0),
      e.hasData ? (a(), f("div", {
        key: 1,
        class: $(["flex-1 flex justify-between", { "sm:hidden": t(d) }])
      }, [
        (a(), x(j(t(l) ? "a" : "div"), {
          class: $([{
            "cursor-not-allowed text-gray-400": !t(l),
            "text-gray-700 hover:text-gray-500": t(l)
          }, "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: t(l),
          dusk: t(l) ? "pagination-simple-previous" : null,
          onClick: q[0] || (q[0] = B((w) => e.onClick(t(l)), ["prevent"]))
        }, {
          default: C(() => [
            Ue,
            s("span", Ye, v(t(c).previous), 1)
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"])),
        z(ie, {
          dusk: "per-page-mobile",
          value: t(m),
          options: e.perPageOptions,
          "on-change": e.onPerPageChange
        }, null, 8, ["value", "options", "on-change"]),
        (a(), x(j(t(g) ? "a" : "div"), {
          class: $([{
            "cursor-not-allowed text-gray-400": !t(g),
            "text-gray-700 hover:text-gray-500": t(g)
          }, "ms-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: t(g),
          dusk: t(g) ? "pagination-simple-next" : null,
          onClick: q[1] || (q[1] = B((w) => e.onClick(t(g)), ["prevent"]))
        }, {
          default: C(() => [
            s("span", Je, v(t(c).next), 1),
            Xe
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"]))
      ], 2)) : k("", !0),
      e.hasData && t(d) ? (a(), f("div", Ze, [
        s("div", et, [
          z(ie, {
            dusk: "per-page-full",
            value: t(m),
            options: e.perPageOptions,
            "on-change": e.onPerPageChange
          }, null, 8, ["value", "options", "on-change"]),
          s("p", tt, [
            s("span", rt, v(t(r).from), 1),
            V(" " + v(t(c).to) + " ", 1),
            s("span", nt, v(t(r).to), 1),
            V(" " + v(t(c).of) + " ", 1),
            s("span", lt, v(t(r).total), 1),
            V(" " + v(t(c).results), 1)
          ])
        ]),
        s("div", st, [
          s("nav", at, [
            (a(), x(j(t(l) ? "a" : "div"), {
              class: $([{
                "cursor-not-allowed text-gray-400": !t(l),
                "text-gray-500 hover:bg-gray-50": t(l)
              }, "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium"]),
              href: t(l),
              dusk: t(l) ? "pagination-previous" : null,
              onClick: q[2] || (q[2] = B((w) => e.onClick(t(l)), ["prevent"]))
            }, {
              default: C(() => [
                s("span", ot, v(t(c).previous), 1),
                ut
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"])),
            (a(!0), f(P, null, O(t(r).links, (w, I) => (a(), f("div", { key: I }, [
              y(F.$slots, "link", {}, () => [
                !isNaN(w.label) || w.label === "..." ? (a(), x(j(w.url ? "a" : "div"), {
                  key: 0,
                  href: w.url,
                  dusk: w.url ? `pagination-${w.label}` : null,
                  class: $(["relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700", {
                    "cursor-not-allowed": !w.url,
                    "hover:bg-gray-50": w.url,
                    "bg-gray-100": w.active
                  }]),
                  onClick: B((N) => e.onClick(w.url), ["prevent"])
                }, {
                  default: C(() => [
                    V(v(w.label), 1)
                  ]),
                  _: 2
                }, 1032, ["href", "dusk", "class", "onClick"])) : k("", !0)
              ])
            ]))), 128)),
            (a(), x(j(t(g) ? "a" : "div"), {
              class: $([{
                "cursor-not-allowed text-gray-400": !t(g),
                "text-gray-500 hover:bg-gray-50": t(g)
              }, "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium"]),
              href: t(g),
              dusk: t(g) ? "pagination-next" : null,
              onClick: q[3] || (q[3] = B((w) => e.onClick(t(g)), ["prevent"]))
            }, {
              default: C(() => [
                s("span", it, v(t(c).next), 1),
                ct
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"]))
          ])
        ])
      ])) : k("", !0)
    ])) : k("", !0);
  }
}, ht = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), ft = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "add-search-input-menu",
  class: "min-w-max"
}, gt = ["dusk", "onClick"], pt = {
  __name: "TableAddSearchRow",
  props: {
    searchInputs: {
      type: Object,
      required: !0
    },
    hasSearchInputsWithoutValue: {
      type: Boolean,
      required: !0
    },
    onAdd: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, c = S(null);
    function d(h) {
      o.onAdd(h), c.value.hide();
    }
    return (h, r) => (a(), x(Y, {
      ref_key: "dropdown",
      ref: c,
      dusk: "add-search-row-dropdown",
      disabled: !e.hasSearchInputsWithoutValue,
      class: "w-auto"
    }, {
      button: C(() => [
        ht
      ]),
      default: C(() => [
        s("div", ft, [
          (a(!0), f(P, null, O(e.searchInputs, (l, g) => (a(), f("button", {
            key: g,
            dusk: `add-search-row-${l.key}`,
            class: "text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
            role: "menuitem",
            onClick: B((m) => d(l.key), ["prevent"])
          }, v(l.label), 9, gt))), 128))
        ])
      ]),
      _: 1
    }, 8, ["disabled"]));
  }
}, vt = /* @__PURE__ */ s("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }, null, -1), mt = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
  "clip-rule": "evenodd"
}, null, -1), bt = [
  vt,
  mt
], yt = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "toggle-columns-menu",
  class: "min-w-max"
}, wt = { class: "px-2" }, xt = { class: "divide-y divide-gray-200" }, kt = { class: "text-sm text-gray-900" }, _t = ["aria-pressed", "aria-labelledby", "aria-describedby", "dusk", "onClick"], $t = /* @__PURE__ */ s("span", { class: "sr-only" }, "Column status", -1), Ct = {
  __name: "TableColumns",
  props: {
    columns: {
      type: Object,
      required: !0
    },
    hasHiddenColumns: {
      type: Boolean,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e;
    return (c, d) => (a(), x(Y, {
      placement: "bottom-end",
      dusk: "columns-dropdown",
      active: e.hasHiddenColumns
    }, {
      button: C(() => [
        (a(), f("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: $(["h-5 w-5", {
            "text-gray-400": !e.hasHiddenColumns,
            "text-green-400": e.hasHiddenColumns
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, bt, 2))
      ]),
      default: C(() => [
        s("div", yt, [
          s("div", wt, [
            s("ul", xt, [
              (a(!0), f(P, null, O(o.columns, (h, r) => D((a(), f("li", {
                key: r,
                class: "py-2 flex items-center justify-between"
              }, [
                s("p", kt, v(h.label), 1),
                s("button", {
                  type: "button",
                  class: $(["ms-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500", {
                    "bg-green-500": !h.hidden,
                    "bg-gray-200": h.hidden
                  }]),
                  "aria-pressed": !h.hidden,
                  "aria-labelledby": `toggle-column-${h.key}`,
                  "aria-describedby": `toggle-column-${h.key}`,
                  dusk: `toggle-column-${h.key}`,
                  onClick: B((l) => e.onChange(h.key, h.hidden), ["prevent"])
                }, [
                  $t,
                  s("span", {
                    "aria-hidden": "true",
                    class: $([{
                      "translate-x-5": !h.hidden,
                      "translate-x-0": h.hidden
                    }, "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                  }, null, 2)
                ], 10, _t)
              ])), [
                [R, h.can_be_hidden]
              ])), 128))
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, St = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
  "clip-rule": "evenodd"
}, null, -1), qt = [
  St
], Bt = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "filter-menu",
  class: "min-w-max"
}, Ft = { class: "text-xs uppercase tracking-wide bg-gray-100 p-3" }, Pt = { class: "p-2" }, Ot = ["name", "value", "onChange"], Tt = ["value"], It = {
  __name: "TableFilter",
  props: {
    hasEnabledFilters: {
      type: Boolean,
      required: !0
    },
    filters: {
      type: Object,
      required: !0
    },
    onFilterChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (o, c) => (a(), x(Y, {
      placement: "bottom-end",
      dusk: "filters-dropdown",
      active: e.hasEnabledFilters
    }, {
      button: C(() => [
        (a(), f("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: $(["h-5 w-5", {
            "text-gray-400": !e.hasEnabledFilters,
            "text-green-400": e.hasEnabledFilters
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, qt, 2))
      ]),
      default: C(() => [
        s("div", Bt, [
          (a(!0), f(P, null, O(e.filters, (d, h) => (a(), f("div", { key: h }, [
            s("h3", Ft, v(d.label), 1),
            s("div", Pt, [
              d.type === "select" ? (a(), f("select", {
                key: 0,
                name: d.key,
                value: d.value,
                class: "block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md",
                onChange: (r) => e.onFilterChange(d.key, r.target.value)
              }, [
                (a(!0), f(P, null, O(d.options, (r, l) => (a(), f("option", {
                  key: l,
                  value: l
                }, v(r), 9, Tt))), 128))
              ], 40, Ot)) : k("", !0)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, jt = { class: "relative" }, Vt = ["placeholder", "value"], Lt = /* @__PURE__ */ s("div", { class: "absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none" }, [
  /* @__PURE__ */ s("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-5 w-5 text-gray-400",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Mt = {
  __name: "TableGlobalSearch",
  props: {
    label: {
      type: String,
      default: "Search...",
      required: !1
    },
    value: {
      type: String,
      default: "",
      required: !1
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (o, c) => (a(), f("div", jt, [
      s("input", {
        class: "block w-full ps-9 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300",
        placeholder: e.label,
        value: e.value,
        type: "text",
        name: "global",
        onInput: c[0] || (c[0] = (d) => e.onChange(d.target.value))
      }, null, 40, Vt),
      Lt
    ]));
  }
}, zt = { class: "flex rounded-md shadow-sm relative mt-3" }, Dt = ["for"], Rt = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 me-2 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), Et = ["id", "name", "value", "onInput"], Nt = { class: "absolute inset-y-0 end-0 pe-3 flex items-center" }, Wt = ["dusk", "onClick"], At = /* @__PURE__ */ s("span", { class: "sr-only" }, "Remove search", -1), Ht = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Gt = [
  At,
  Ht
], Kt = {
  __name: "TableSearchRows",
  props: {
    searchInputs: {
      type: Object,
      required: !0
    },
    forcedVisibleSearchInputs: {
      type: Array,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    },
    onRemove: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, c = { el: S([]) };
    let d = _(() => c.el.value);
    function h(r) {
      return o.forcedVisibleSearchInputs.includes(r);
    }
    return U(o.forcedVisibleSearchInputs, (r) => {
      const l = r.length > 0 ? r[r.length - 1] : null;
      !l || ye().then(() => {
        const g = qe(d.value, (m) => m.__vnode.key === l);
        g && g.focus();
      });
    }, { immediate: !0 }), (r, l) => (a(!0), f(P, null, O(e.searchInputs, (g, m) => D((a(), f("div", {
      key: m,
      class: "px-4 sm:px-0"
    }, [
      s("div", zt, [
        s("label", {
          for: g.key,
          class: "inline-flex items-center px-4 rounded-s-md border border-e-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        }, [
          Rt,
          s("span", null, v(g.label), 1)
        ], 8, Dt),
        (a(), f("input", {
          id: g.key,
          ref_for: !0,
          ref: c.el,
          key: g.key,
          name: g.key,
          value: g.value,
          type: "text",
          class: "flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-e-md focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300",
          onInput: (F) => e.onChange(g.key, F.target.value)
        }, null, 40, Et)),
        s("div", Nt, [
          s("button", {
            class: "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            dusk: `remove-search-row-${g.key}`,
            onClick: B((F) => e.onRemove(g.key), ["prevent"])
          }, Gt, 8, Wt)
        ])
      ])
    ])), [
      [R, g.value !== null || h(g.key)]
    ])), 128));
  }
}, Qt = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 me-2 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), Ut = /* @__PURE__ */ s("span", null, "Reset", -1), Yt = [
  Qt,
  Ut
], Jt = {
  __name: "TableReset",
  props: {
    onClick: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (o, c) => (a(), f("button", {
      ref: "button",
      type: "button",
      dusk: "reset-table",
      class: "w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300",
      "aria-haspopup": "true",
      onClick: c[0] || (c[0] = B((...d) => e.onClick && e.onClick(...d), ["prevent"]))
    }, Yt, 512));
  }
}, Xt = (e, o) => {
  const c = e.__vccOpts || e;
  for (const [d, h] of o)
    c[d] = h;
  return c;
}, Zt = {}, er = { class: "flex flex-col" }, tr = { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, rr = { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, nr = { class: "shadow border-b border-gray-200 relative" };
function lr(e, o) {
  return a(), f("div", er, [
    s("div", tr, [
      s("div", rr, [
        s("div", nr, [
          y(e.$slots, "default")
        ])
      ])
    ])
  ]);
}
const sr = /* @__PURE__ */ Xt(Zt, [["render", lr]]), ar = ["dusk"], or = { class: "flex flex-row flex-wrap sm:flex-nowrap justify-start px-4 sm:px-0" }, ur = { class: "order-2 sm:order-1 me-2 sm:me-4" }, ir = {
  key: 0,
  class: "flex flex-row w-full sm:w-auto sm:flex-grow order-1 sm:order-2 mb-2 sm:mb-0 sm:me-4"
}, cr = {
  key: 0,
  class: "order-5 sm:order-3 sm:me-4 ms-0"
}, dr = { class: "min-w-full divide-y divide-gray-200 bg-white" }, hr = { class: "bg-gray-50" }, fr = { class: "font-medium text-xs uppercase text-start tracking-wider text-gray-500 py-3 px-6" }, gr = { class: "bg-white divide-y divide-gray-200" }, Or = {
  __name: "Table",
  props: {
    inertia: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    name: {
      type: String,
      default: "default",
      required: !1
    },
    striped: {
      type: Boolean,
      default: !1,
      required: !1
    },
    preventOverlappingRequests: {
      type: Boolean,
      default: !0,
      required: !1
    },
    inputDebounceMs: {
      type: Number,
      default: 350,
      required: !1
    },
    preserveScroll: {
      type: [Boolean, String],
      default: !1,
      required: !1
    },
    resource: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    meta: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    data: {
      type: Object,
      default: () => ({}),
      required: !1
    }
  },
  setup(e) {
    const o = e, c = we(), d = c ? c.appContext.config.globalProperties.$inertia : o.inertia, h = S(0), r = _(() => {
      let n = d.page.props.queryBuilderProps ? d.page.props.queryBuilderProps[o.name] || {} : {};
      return n._updates = h.value, n;
    }), l = S(r.value), g = _(() => r.value.pageName), m = S([]), F = S(null), q = _(() => !(r.value.hasToggleableColumns || r.value.hasFilters || r.value.hasSearchInputs || r.value.globalSearch)), w = _(() => Object.keys(o.resource).length === 0 ? o.data : "data" in o.resource ? o.resource.data : o.resource), I = _(() => Object.keys(o.resource).length === 0 ? o.meta : "links" in o.resource && "meta" in o.resource && Object.keys(o.resource.links).length === 4 && "next" in o.resource.links && "prev" in o.resource.links ? {
      ...o.resource.meta,
      next_page_url: o.resource.links.next,
      prev_page_url: o.resource.links.prev
    } : "meta" in o.resource ? o.resource.meta : o.resource), N = _(() => w.value.length > 0 || I.value.total > 0);
    function de(n) {
      m.value = m.value.filter((i) => i != n), E(n, null);
    }
    function X(n) {
      m.value.push(n);
    }
    const he = _(() => {
      if (m.value.length > 0)
        return !0;
      const n = K.parse(location.search.substring(1));
      if (n[g.value] > 1)
        return !0;
      const u = o.name === "default" ? "" : o.name + "_";
      let p = !1;
      return T(["filter", "columns", "cursor", "sort"], (b) => {
        const M = n[u + b];
        b === "sort" && M === r.value.defaultSort || M !== void 0 && (p = !0);
      }), p;
    });
    function Z() {
      m.value = [], T(l.value.filters, (n, i) => {
        l.value.filters[i].value = null;
      }), T(l.value.searchInputs, (n, i) => {
        l.value.searchInputs[i].value = null;
      }), T(l.value.columns, (n, i) => {
        l.value.columns[i].hidden = n.can_be_hidden ? !r.value.defaultVisibleToggleableColumns.includes(n.key) : !1;
      }), l.value.sort = null, l.value.cursor = null, l.value.page = 1;
    }
    const ee = {};
    function E(n, i) {
      clearTimeout(ee[n]), ee[n] = setTimeout(() => {
        A.value && o.preventOverlappingRequests && A.value.cancel();
        const u = L("searchInputs", n);
        l.value.searchInputs[u].value = i, l.value.cursor = null, l.value.page = 1;
      }, o.inputDebounceMs);
    }
    function te(n) {
      E("global", n);
    }
    function re(n, i) {
      const u = L("filters", n);
      l.value.filters[u].value = i, l.value.cursor = null, l.value.page = 1;
    }
    function ne(n) {
      l.value.cursor = null, l.value.perPage = n, l.value.page = 1;
    }
    function L(n, i) {
      return Pe(l.value[n], (u) => u.key == i);
    }
    function le(n, i) {
      const u = L("columns", n);
      l.value.columns[u].hidden = !i;
    }
    function fe() {
      let n = {};
      return T(l.value.searchInputs, (i) => {
        i.value !== null && (n[i.key] = i.value);
      }), T(l.value.filters, (i) => {
        i.value !== null && (n[i.key] = i.value);
      }), n;
    }
    function ge() {
      const n = l.value.columns;
      let i = Fe(n, (p) => !p.hidden), u = Te(i, (p) => p.key).sort();
      return Oe(u, r.value.defaultVisibleToggleableColumns) ? {} : u;
    }
    function pe() {
      const n = fe(), i = ge(), u = {};
      Object.keys(n).length > 0 && (u.filter = n), Object.keys(i).length > 0 && (u.columns = i);
      const p = l.value.cursor, b = l.value.page, M = l.value.sort, ue = l.value.perPage;
      return p && (u.cursor = p), b > 1 && (u.page = b), ue > 1 && (u.perPage = ue), M && (u.sort = M), u;
    }
    function ve() {
      const n = K.parse(location.search.substring(1)), i = o.name === "default" ? "" : o.name + "_";
      T(["filter", "columns", "cursor", "sort"], (p) => {
        delete n[i + p];
      }), delete n[g.value], T(pe(), (p, b) => {
        b === "page" ? n[g.value] = p : b === "perPage" ? n.perPage = p : n[i + b] = p;
      });
      let u = K.stringify(n, {
        filter(p, b) {
          return typeof b == "object" && b !== null ? Ie(b) : b;
        },
        skipNulls: !0,
        strictNullHandling: !0
      });
      return (!u || u === g.value + "=1") && (u = ""), u;
    }
    const W = S(!1), A = S(null);
    function H(n) {
      !n || d.get(
        n,
        {},
        {
          replace: !0,
          preserveState: !0,
          preserveScroll: o.preserveScroll !== !1,
          onBefore() {
            W.value = !0;
          },
          onCancelToken(i) {
            A.value = i;
          },
          onFinish() {
            W.value = !1;
          },
          onSuccess() {
            if ("queryBuilderProps" in d.page.props && (l.value.cursor = r.value.cursor, l.value.page = r.value.page), o.preserveScroll === "table-top") {
              const u = F.value.getBoundingClientRect().top + window.pageYOffset + -8;
              window.scrollTo({ top: u });
            }
            h.value++;
          }
        }
      );
    }
    U(l, () => {
      H(location.pathname + "?" + ve());
    }, { deep: !0 });
    const se = () => {
      h.value++;
    };
    Q(() => {
      document.addEventListener("inertia:success", se);
    }), xe(() => {
      document.removeEventListener("inertia:success", se);
    });
    function ae(n) {
      l.value.sort == n ? l.value.sort = `-${n}` : l.value.sort = n, l.value.cursor = null, l.value.page = 1;
    }
    function G(n) {
      const i = L("columns", n);
      return !l.value.columns[i].hidden;
    }
    function oe(n) {
      const i = L("columns", n), u = Be(r.value.columns[i]);
      return u.onSort = ae, u;
    }
    function me(n, i) {
      try {
        var u = i.split(".");
        return u.length == 1 ? n[i].toString() : u.length == 2 ? n[u[0]][u[1]].toString() : u.length == 3 ? n[u[0]][u[1]][u[2]].toString() : "Unsupported Nested Index";
      } catch {
      }
      return "N/A";
    }
    return (n, i) => (a(), x(ke, null, {
      default: C(() => [
        (a(), f("fieldset", {
          ref_key: "tableFieldset",
          ref: F,
          key: `table-${e.name}`,
          dusk: `table-${e.name}`,
          class: $(["min-w-0", { "opacity-75": W.value }])
        }, [
          s("div", or, [
            s("div", ur, [
              y(n.$slots, "tableFilter", {
                hasFilters: t(r).hasFilters,
                hasEnabledFilters: t(r).hasEnabledFilters,
                filters: t(r).filters,
                onFilterChange: re
              }, () => [
                t(r).hasFilters ? (a(), x(It, {
                  key: 0,
                  "has-enabled-filters": t(r).hasEnabledFilters,
                  filters: t(r).filters,
                  "on-filter-change": re
                }, null, 8, ["has-enabled-filters", "filters"])) : k("", !0)
              ])
            ]),
            t(r).globalSearch ? (a(), f("div", ir, [
              y(n.$slots, "tableGlobalSearch", {
                hasGlobalSearch: t(r).globalSearch,
                label: t(r).globalSearch ? t(r).globalSearch.label : null,
                value: t(r).globalSearch ? t(r).globalSearch.value : null,
                onChange: te
              }, () => [
                t(r).globalSearch ? (a(), x(Mt, {
                  key: 0,
                  class: "flex-grow",
                  label: t(r).globalSearch.label,
                  value: t(r).globalSearch.value,
                  "on-change": te
                }, null, 8, ["label", "value"])) : k("", !0)
              ])
            ])) : k("", !0),
            y(n.$slots, "tableReset", {
              canBeReset: "canBeReset",
              onClick: Z
            }, () => [
              t(he) ? (a(), f("div", cr, [
                V(" w "),
                z(Jt, { "on-click": Z })
              ])) : k("", !0)
            ]),
            y(n.$slots, "tableAddSearchRow", {
              hasSearchInputs: t(r).hasSearchInputs,
              hasSearchInputsWithoutValue: t(r).hasSearchInputsWithoutValue,
              searchInputs: t(r).searchInputsWithoutGlobal,
              onAdd: X
            }, () => [
              t(r).hasSearchInputs ? (a(), x(pt, {
                key: 0,
                class: "order-3 sm:order-4 me-2 sm:me-4",
                "search-inputs": t(r).searchInputsWithoutGlobal,
                "has-search-inputs-without-value": t(r).hasSearchInputsWithoutValue,
                "on-add": X
              }, null, 8, ["search-inputs", "has-search-inputs-without-value"])) : k("", !0)
            ]),
            y(n.$slots, "tableColumns", {
              hasColumns: t(r).hasToggleableColumns,
              columns: t(r).columns,
              hasHiddenColumns: t(r).hasHiddenColumns,
              onChange: le
            }, () => [
              t(r).hasToggleableColumns ? (a(), x(Ct, {
                key: 0,
                class: "order-4 me-4 sm:me-0 sm:order-5",
                columns: t(r).columns,
                "has-hidden-columns": t(r).hasHiddenColumns,
                "on-change": le
              }, null, 8, ["columns", "has-hidden-columns"])) : k("", !0)
            ])
          ]),
          y(n.$slots, "tableSearchRows", {
            hasSearchRowsWithValue: t(r).hasSearchInputsWithValue,
            searchInputs: t(r).searchInputsWithoutGlobal,
            forcedVisibleSearchInputs: m.value,
            onChange: E
          }, () => [
            t(r).hasSearchInputsWithValue || m.value.length > 0 ? (a(), x(Kt, {
              key: 0,
              "search-inputs": t(r).searchInputsWithoutGlobal,
              "forced-visible-search-inputs": m.value,
              "on-change": E,
              "on-remove": de
            }, null, 8, ["search-inputs", "forced-visible-search-inputs"])) : k("", !0)
          ]),
          y(n.$slots, "tableWrapper", { meta: t(I) }, () => [
            z(sr, {
              class: $({ "mt-3": !t(q) })
            }, {
              default: C(() => [
                y(n.$slots, "table", {}, () => [
                  s("table", dr, [
                    s("thead", hr, [
                      y(n.$slots, "head", {
                        show: G,
                        sortBy: ae,
                        header: oe
                      }, () => [
                        s("tr", fr, [
                          (a(!0), f(P, null, O(t(r).columns, (u) => (a(), x(Ae, {
                            key: `table-${e.name}-header-${u.key}`,
                            cell: oe(u.key)
                          }, null, 8, ["cell"]))), 128))
                        ])
                      ])
                    ]),
                    s("tbody", gr, [
                      y(n.$slots, "body", { show: G }, () => [
                        (a(!0), f(P, null, O(t(w), (u, p) => (a(), f("tr", {
                          key: `table-${e.name}-row-${p}`,
                          class: $(["", {
                            "bg-gray-50": e.striped && p % 2,
                            "hover:bg-gray-100": e.striped,
                            "hover:bg-gray-50": !e.striped
                          }])
                        }, [
                          (a(!0), f(P, null, O(t(r).columns, (b) => D((a(), f("td", {
                            key: `table-${e.name}-row-${p}-column-${b.key}`,
                            class: "text-sm py-4 px-6 text-gray-500 whitespace-nowrap"
                          }, [
                            y(n.$slots, `cell(${b.key})`, { item: u }, () => [
                              V(v(me(u, b.key)), 1)
                            ])
                          ])), [
                            [R, G(b.key)]
                          ])), 128))
                        ], 2))), 128))
                      ])
                    ])
                  ])
                ]),
                y(n.$slots, "pagination", {
                  onClick: H,
                  hasData: t(N),
                  meta: t(I),
                  perPageOptions: t(r).perPageOptions,
                  onPerPageChange: ne
                }, () => [
                  z(dt, {
                    "on-click": H,
                    "has-data": t(N),
                    meta: t(I),
                    "per-page-options": t(r).perPageOptions,
                    "on-per-page-change": ne
                  }, null, 8, ["has-data", "meta", "per-page-options"])
                ])
              ]),
              _: 3
            }, 8, ["class"])
          ])
        ], 10, ar))
      ]),
      _: 3
    }));
  }
};
export {
  Y as ButtonWithDropdown,
  Ae as HeaderCell,
  je as OnClickOutside,
  dt as Pagination,
  Or as Table,
  pt as TableAddSearchRow,
  Ct as TableColumns,
  It as TableFilter,
  Mt as TableGlobalSearch,
  Jt as TableReset,
  Kt as TableSearchRows,
  sr as TableWrapper,
  ce as getTranslations,
  Fr as setTranslation,
  Pr as setTranslations
};
