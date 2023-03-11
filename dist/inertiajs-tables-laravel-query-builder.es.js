import { ref as S, onMounted as Q, onBeforeUnmount as me, openBlock as a, createElementBlock as h, renderSlot as y, watch as U, createBlock as x, withCtx as C, createElementVNode as l, normalizeClass as $, withModifiers as B, withDirectives as D, vShow as R, resolveDynamicComponent as I, toDisplayString as g, createCommentVNode as k, computed as _, Fragment as P, renderList as O, unref as t, createVNode as z, createTextVNode as M, nextTick as be, getCurrentInstance as ye, onUnmounted as we, Transition as xe } from "vue";
import { createPopper as ke } from "@popperjs/core/lib/popper-lite";
import _e from "@popperjs/core/lib/modifiers/preventOverflow";
import $e from "@popperjs/core/lib/modifiers/flip";
import Ce from "lodash-es/uniq";
import Se from "lodash-es/find";
import K from "qs";
import qe from "lodash-es/clone";
import Be from "lodash-es/filter";
import Fe from "lodash-es/findKey";
import T from "lodash-es/forEach";
import Pe from "lodash-es/isEqual";
import Oe from "lodash-es/map";
import Te from "lodash-es/pickBy";
const je = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, u = S(null), i = S(null);
    return Q(() => {
      u.value = (c) => {
        c.target === i.value || i.value.contains(c.target) || o.do();
      }, document.addEventListener("click", u.value), document.addEventListener("touchstart", u.value);
    }), me(() => {
      document.removeEventListener("click", u.value), document.removeEventListener("touchstart", u.value);
    }), (c, r) => (a(), h("div", {
      ref_key: "root",
      ref: i
    }, [
      y(c.$slots, "default")
    ], 512));
  }
}, Ie = { class: "relative" }, Ve = ["dusk", "disabled", "onClick"], Le = { class: "mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" }, Y = {
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
    const u = e, i = S(!1), c = S(null);
    function r() {
      i.value = !i.value;
    }
    function n() {
      i.value = !1;
    }
    U(i, () => {
      c.value.update();
    });
    const f = S(null), m = S(null);
    return Q(() => {
      c.value = ke(f.value, m.value, {
        placement: u.placement,
        modifiers: [$e, _e]
      });
    }), o({ hide: n }), (F, q) => (a(), x(je, { do: n }, {
      default: C(() => [
        l("div", Ie, [
          l("button", {
            ref_key: "button",
            ref: f,
            type: "button",
            dusk: e.dusk,
            disabled: e.disabled,
            class: $(["w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", { "border-green-300": e.active, "border-gray-300": !e.active, "cursor-not-allowed": e.disabled }]),
            "aria-haspopup": "true",
            onClick: B(r, ["prevent"])
          }, [
            y(F.$slots, "button")
          ], 10, Ve),
          D(l("div", {
            ref_key: "tooltip",
            ref: m,
            class: "absolute z-10"
          }, [
            l("div", Le, [
              y(F.$slots, "default")
            ])
          ], 512), [
            [R, i.value]
          ])
        ])
      ]),
      _: 3
    }));
  }
}, Me = { class: "flex flex-row items-center" }, ze = { class: "uppercase" }, De = ["sorted"], Re = {
  key: 0,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, Ee = {
  key: 1,
  fill: "currentColor",
  d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
}, We = {
  key: 2,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, Ne = {
  __name: "HeaderCell",
  props: {
    cell: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const o = e;
    function u() {
      o.cell.sortable && o.cell.onSort(o.cell.key);
    }
    return (i, c) => D((a(), h("th", null, [
      (a(), x(I(e.cell.sortable ? "button" : "div"), {
        class: "py-3 px-6 w-full",
        dusk: e.cell.sortable ? `sort-${e.cell.key}` : null,
        onClick: B(u, ["prevent"])
      }, {
        default: C(() => [
          l("span", Me, [
            y(i.$slots, "label", {}, () => [
              l("span", ze, g(e.cell.label), 1)
            ]),
            y(i.$slots, "sort", {}, () => [
              e.cell.sortable ? (a(), h("svg", {
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
                e.cell.sorted ? k("", !0) : (a(), h("path", Re)),
                e.cell.sorted === "asc" ? (a(), h("path", Ee)) : k("", !0),
                e.cell.sorted === "desc" ? (a(), h("path", We)) : k("", !0)
              ], 10, De)) : k("", !0)
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
function Br(e, o) {
  J.translations[e] = o;
}
function Fr(e) {
  J.translations = e;
}
const Ae = ["dusk", "value"], He = ["value"], ie = {
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
    const o = e, u = ce(), i = _(() => {
      let c = [...o.options];
      return c.push(parseInt(o.value)), Ce(c).sort((r, n) => r - n);
    });
    return (c, r) => (a(), h("select", {
      name: "per_page",
      dusk: e.dusk,
      value: e.value,
      class: "block focus:ring-indigo-500 focus:border-indigo-500 min-w-max shadow-sm text-sm border-gray-300 rounded-md",
      onChange: r[0] || (r[0] = (n) => e.onChange(n.target.value))
    }, [
      (a(!0), h(P, null, O(t(i), (n) => (a(), h("option", {
        key: n,
        value: n
      }, g(n) + " " + g(t(u).per_page), 9, He))), 128))
    ], 40, Ae));
  }
}, Ge = {
  key: 0,
  class: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
}, Ke = { key: 0 }, Qe = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
  })
], -1), Ue = { class: "hidden sm:inline ms-2" }, Ye = { class: "hidden sm:inline me-2" }, Je = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M17 8l4 4m0 0l-4 4m4-4H3"
  })
], -1), Xe = {
  key: 2,
  class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
}, Ze = { class: "flex flex-row space-x-4 items-center flex-grow" }, et = { class: "hidden lg:block text-sm text-gray-700 flex-grow p-4" }, tt = { class: "font-medium" }, rt = { class: "font-medium" }, nt = { class: "font-medium" }, st = { dir: "ltr" }, lt = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, at = { class: "sr-only" }, ot = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1), ut = { class: "sr-only" }, it = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    "clip-rule": "evenodd"
  })
], -1), ct = {
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
    const o = e, u = ce(), i = _(() => "links" in r.value ? r.value.links.length > 0 : !1), c = _(() => Object.keys(r.value).length > 0), r = _(() => o.meta), n = _(() => "prev_page_url" in r.value ? r.value.prev_page_url : null), f = _(() => "next_page_url" in r.value ? r.value.next_page_url : null), m = _(() => parseInt(r.value.per_page));
    return (F, q) => t(c) ? (a(), h("nav", Ge, [
      !e.hasData || t(r).total < 1 ? (a(), h("p", Ke, g(t(u).no_results_found), 1)) : k("", !0),
      e.hasData ? (a(), h("div", {
        key: 1,
        class: $(["flex-1 flex justify-between", { "sm:hidden": t(i) }])
      }, [
        (a(), x(I(t(n) ? "a" : "div"), {
          class: $([{
            "cursor-not-allowed text-gray-400": !t(n),
            "text-gray-700 hover:text-gray-500": t(n)
          }, "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: t(n),
          dusk: t(n) ? "pagination-simple-previous" : null,
          onClick: q[0] || (q[0] = B((w) => e.onClick(t(n)), ["prevent"]))
        }, {
          default: C(() => [
            Qe,
            l("span", Ue, g(t(u).previous), 1)
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"])),
        z(ie, {
          dusk: "per-page-mobile",
          value: t(m),
          options: e.perPageOptions,
          "on-change": e.onPerPageChange
        }, null, 8, ["value", "options", "on-change"]),
        (a(), x(I(t(f) ? "a" : "div"), {
          class: $([{
            "cursor-not-allowed text-gray-400": !t(f),
            "text-gray-700 hover:text-gray-500": t(f)
          }, "ms-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: t(f),
          dusk: t(f) ? "pagination-simple-next" : null,
          onClick: q[1] || (q[1] = B((w) => e.onClick(t(f)), ["prevent"]))
        }, {
          default: C(() => [
            l("span", Ye, g(t(u).next), 1),
            Je
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"]))
      ], 2)) : k("", !0),
      e.hasData && t(i) ? (a(), h("div", Xe, [
        l("div", Ze, [
          z(ie, {
            dusk: "per-page-full",
            value: t(m),
            options: e.perPageOptions,
            "on-change": e.onPerPageChange
          }, null, 8, ["value", "options", "on-change"]),
          l("p", et, [
            l("span", tt, g(t(r).from), 1),
            M(" " + g(t(u).to) + " ", 1),
            l("span", rt, g(t(r).to), 1),
            M(" " + g(t(u).of) + " ", 1),
            l("span", nt, g(t(r).total), 1),
            M(" " + g(t(u).results), 1)
          ])
        ]),
        l("div", st, [
          l("nav", lt, [
            (a(), x(I(t(n) ? "a" : "div"), {
              class: $([{
                "cursor-not-allowed text-gray-400": !t(n),
                "text-gray-500 hover:bg-gray-50": t(n)
              }, "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium"]),
              href: t(n),
              dusk: t(n) ? "pagination-previous" : null,
              onClick: q[2] || (q[2] = B((w) => e.onClick(t(n)), ["prevent"]))
            }, {
              default: C(() => [
                l("span", at, g(t(u).previous), 1),
                ot
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"])),
            (a(!0), h(P, null, O(t(r).links, (w, j) => (a(), h("div", { key: j }, [
              y(F.$slots, "link", {}, () => [
                !isNaN(w.label) || w.label === "..." ? (a(), x(I(w.url ? "a" : "div"), {
                  key: 0,
                  href: w.url,
                  dusk: w.url ? `pagination-${w.label}` : null,
                  class: $(["relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700", {
                    "cursor-not-allowed": !w.url,
                    "hover:bg-gray-50": w.url,
                    "bg-gray-100": w.active
                  }]),
                  onClick: B((W) => e.onClick(w.url), ["prevent"])
                }, {
                  default: C(() => [
                    M(g(w.label), 1)
                  ]),
                  _: 2
                }, 1032, ["href", "dusk", "class", "onClick"])) : k("", !0)
              ])
            ]))), 128)),
            (a(), x(I(t(f) ? "a" : "div"), {
              class: $([{
                "cursor-not-allowed text-gray-400": !t(f),
                "text-gray-500 hover:bg-gray-50": t(f)
              }, "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium"]),
              href: t(f),
              dusk: t(f) ? "pagination-next" : null,
              onClick: q[3] || (q[3] = B((w) => e.onClick(t(f)), ["prevent"]))
            }, {
              default: C(() => [
                l("span", ut, g(t(u).next), 1),
                it
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"]))
          ])
        ])
      ])) : k("", !0)
    ])) : k("", !0);
  }
}, dt = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), ht = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "add-search-input-menu",
  class: "min-w-max"
}, ft = ["dusk", "onClick"], pt = {
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
    const o = e, u = S(null);
    function i(c) {
      o.onAdd(c), u.value.hide();
    }
    return (c, r) => (a(), x(Y, {
      ref_key: "dropdown",
      ref: u,
      dusk: "add-search-row-dropdown",
      disabled: !e.hasSearchInputsWithoutValue,
      class: "w-auto"
    }, {
      button: C(() => [
        dt
      ]),
      default: C(() => [
        l("div", ht, [
          (a(!0), h(P, null, O(e.searchInputs, (n, f) => (a(), h("button", {
            key: f,
            dusk: `add-search-row-${n.key}`,
            class: "text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
            role: "menuitem",
            onClick: B((m) => i(n.key), ["prevent"])
          }, g(n.label), 9, ft))), 128))
        ])
      ]),
      _: 1
    }, 8, ["disabled"]));
  }
}, gt = /* @__PURE__ */ l("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }, null, -1), vt = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
  "clip-rule": "evenodd"
}, null, -1), mt = [
  gt,
  vt
], bt = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "toggle-columns-menu",
  class: "min-w-max"
}, yt = { class: "px-2" }, wt = { class: "divide-y divide-gray-200" }, xt = { class: "text-sm text-gray-900" }, kt = ["aria-pressed", "aria-labelledby", "aria-describedby", "dusk", "onClick"], _t = /* @__PURE__ */ l("span", { class: "sr-only" }, "Column status", -1), $t = {
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
    return (u, i) => (a(), x(Y, {
      placement: "bottom-end",
      dusk: "columns-dropdown",
      active: e.hasHiddenColumns
    }, {
      button: C(() => [
        (a(), h("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: $(["h-5 w-5", {
            "text-gray-400": !e.hasHiddenColumns,
            "text-green-400": e.hasHiddenColumns
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, mt, 2))
      ]),
      default: C(() => [
        l("div", bt, [
          l("div", yt, [
            l("ul", wt, [
              (a(!0), h(P, null, O(o.columns, (c, r) => D((a(), h("li", {
                key: r,
                class: "py-2 flex items-center justify-between"
              }, [
                l("p", xt, g(c.label), 1),
                l("button", {
                  type: "button",
                  class: $(["ms-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500", {
                    "bg-green-500": !c.hidden,
                    "bg-gray-200": c.hidden
                  }]),
                  "aria-pressed": !c.hidden,
                  "aria-labelledby": `toggle-column-${c.key}`,
                  "aria-describedby": `toggle-column-${c.key}`,
                  dusk: `toggle-column-${c.key}`,
                  onClick: B((n) => e.onChange(c.key, c.hidden), ["prevent"])
                }, [
                  _t,
                  l("span", {
                    "aria-hidden": "true",
                    class: $([{
                      "translate-x-5": !c.hidden,
                      "translate-x-0": c.hidden
                    }, "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                  }, null, 2)
                ], 10, kt)
              ])), [
                [R, c.can_be_hidden]
              ])), 128))
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, Ct = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
  "clip-rule": "evenodd"
}, null, -1), St = [
  Ct
], qt = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "filter-menu",
  class: "min-w-max"
}, Bt = { class: "text-xs uppercase tracking-wide bg-gray-100 p-3" }, Ft = { class: "p-2" }, Pt = ["name", "value", "onChange"], Ot = ["value"], Tt = {
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
    return (o, u) => (a(), x(Y, {
      placement: "bottom-end",
      dusk: "filters-dropdown",
      active: e.hasEnabledFilters
    }, {
      button: C(() => [
        (a(), h("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: $(["h-5 w-5", {
            "text-gray-400": !e.hasEnabledFilters,
            "text-green-400": e.hasEnabledFilters
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, St, 2))
      ]),
      default: C(() => [
        l("div", qt, [
          (a(!0), h(P, null, O(e.filters, (i, c) => (a(), h("div", { key: c }, [
            l("h3", Bt, g(i.label), 1),
            l("div", Ft, [
              i.type === "select" ? (a(), h("select", {
                key: 0,
                name: i.key,
                value: i.value,
                class: "block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md",
                onChange: (r) => e.onFilterChange(i.key, r.target.value)
              }, [
                (a(!0), h(P, null, O(i.options, (r, n) => (a(), h("option", {
                  key: n,
                  value: n
                }, g(r), 9, Ot))), 128))
              ], 40, Pt)) : k("", !0)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, jt = { class: "relative" }, It = ["placeholder", "value"], Vt = /* @__PURE__ */ l("div", { class: "absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none" }, [
  /* @__PURE__ */ l("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-5 w-5 text-gray-400",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    /* @__PURE__ */ l("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Lt = {
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
    return (o, u) => (a(), h("div", jt, [
      l("input", {
        class: "block w-full ps-9 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300",
        placeholder: e.label,
        value: e.value,
        type: "text",
        name: "global",
        onInput: u[0] || (u[0] = (i) => e.onChange(i.target.value))
      }, null, 40, It),
      Vt
    ]));
  }
}, Mt = { class: "flex rounded-md shadow-sm relative mt-3" }, zt = ["for"], Dt = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 me-2 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), Rt = ["id", "name", "value", "onInput"], Et = { class: "absolute inset-y-0 end-0 pe-3 flex items-center" }, Wt = ["dusk", "onClick"], Nt = /* @__PURE__ */ l("span", { class: "sr-only" }, "Remove search", -1), At = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Ht = [
  Nt,
  At
], Gt = {
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
    const o = e, u = { el: S([]) };
    let i = _(() => u.el.value);
    function c(r) {
      return o.forcedVisibleSearchInputs.includes(r);
    }
    return U(o.forcedVisibleSearchInputs, (r) => {
      const n = r.length > 0 ? r[r.length - 1] : null;
      !n || be().then(() => {
        const f = Se(i.value, (m) => m.__vnode.key === n);
        f && f.focus();
      });
    }, { immediate: !0 }), (r, n) => (a(!0), h(P, null, O(e.searchInputs, (f, m) => D((a(), h("div", {
      key: m,
      class: "px-4 sm:px-0"
    }, [
      l("div", Mt, [
        l("label", {
          for: f.key,
          class: "inline-flex items-center px-4 rounded-s-md border border-e-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        }, [
          Dt,
          l("span", null, g(f.label), 1)
        ], 8, zt),
        (a(), h("input", {
          id: f.key,
          ref_for: !0,
          ref: u.el,
          key: f.key,
          name: f.key,
          value: f.value,
          type: "text",
          class: "flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-e-md focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300",
          onInput: (F) => e.onChange(f.key, F.target.value)
        }, null, 40, Rt)),
        l("div", Et, [
          l("button", {
            class: "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            dusk: `remove-search-row-${f.key}`,
            onClick: B((F) => e.onRemove(f.key), ["prevent"])
          }, Ht, 8, Wt)
        ])
      ])
    ])), [
      [R, f.value !== null || c(f.key)]
    ])), 128));
  }
}, Kt = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 me-2 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), Qt = /* @__PURE__ */ l("span", null, "Reset", -1), Ut = [
  Kt,
  Qt
], Yt = {
  __name: "TableReset",
  props: {
    onClick: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (o, u) => (a(), h("button", {
      ref: "button",
      type: "button",
      dusk: "reset-table",
      class: "w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300",
      "aria-haspopup": "true",
      onClick: u[0] || (u[0] = B((...i) => e.onClick && e.onClick(...i), ["prevent"]))
    }, Ut, 512));
  }
}, Jt = (e, o) => {
  const u = e.__vccOpts || e;
  for (const [i, c] of o)
    u[i] = c;
  return u;
}, Xt = {}, Zt = { class: "flex flex-col" }, er = { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, tr = { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, rr = { class: "shadow border-b border-gray-200 relative" };
function nr(e, o) {
  return a(), h("div", Zt, [
    l("div", er, [
      l("div", tr, [
        l("div", rr, [
          y(e.$slots, "default")
        ])
      ])
    ])
  ]);
}
const sr = /* @__PURE__ */ Jt(Xt, [["render", nr]]), lr = ["dusk"], ar = { class: "flex flex-row flex-wrap sm:flex-nowrap justify-start px-4 sm:px-0" }, or = { class: "order-2 sm:order-1 me-2 sm:me-4" }, ur = {
  key: 0,
  class: "flex flex-row w-full sm:w-auto sm:flex-grow order-1 sm:order-2 mb-2 sm:mb-0 sm:me-4"
}, ir = {
  key: 0,
  class: "order-5 sm:order-3 sm:me-4 ms-0"
}, cr = { class: "min-w-full divide-y divide-gray-200 bg-white" }, dr = { class: "bg-gray-50" }, hr = { class: "font-medium text-xs uppercase text-start tracking-wider text-gray-500 py-3 px-6" }, fr = { class: "bg-white divide-y divide-gray-200" }, Pr = {
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
    const o = e, u = ye(), i = u ? u.appContext.config.globalProperties.$inertia : o.inertia, c = S(0), r = _(() => {
      let s = i.page.props.queryBuilderProps ? i.page.props.queryBuilderProps[o.name] || {} : {};
      return s._updates = c.value, s;
    }), n = S(r.value), f = _(() => r.value.pageName), m = S([]), F = S(null), q = _(() => !(r.value.hasToggleableColumns || r.value.hasFilters || r.value.hasSearchInputs || r.value.globalSearch)), w = _(() => Object.keys(o.resource).length === 0 ? o.data : "data" in o.resource ? o.resource.data : o.resource), j = _(() => Object.keys(o.resource).length === 0 ? o.meta : "links" in o.resource && "meta" in o.resource && Object.keys(o.resource.links).length === 4 && "next" in o.resource.links && "prev" in o.resource.links ? {
      ...o.resource.meta,
      next_page_url: o.resource.links.next,
      prev_page_url: o.resource.links.prev
    } : "meta" in o.resource ? o.resource.meta : o.resource), W = _(() => w.value.length > 0 || j.value.total > 0);
    function de(s) {
      m.value = m.value.filter((d) => d != s), E(s, null);
    }
    function X(s) {
      m.value.push(s);
    }
    const he = _(() => {
      if (m.value.length > 0)
        return !0;
      const s = K.parse(location.search.substring(1));
      if (s[f.value] > 1)
        return !0;
      const p = o.name === "default" ? "" : o.name + "_";
      let v = !1;
      return T(["filter", "columns", "cursor", "sort"], (b) => {
        const L = s[p + b];
        b === "sort" && L === r.value.defaultSort || L !== void 0 && (v = !0);
      }), v;
    });
    function Z() {
      m.value = [], T(n.value.filters, (s, d) => {
        n.value.filters[d].value = null;
      }), T(n.value.searchInputs, (s, d) => {
        n.value.searchInputs[d].value = null;
      }), T(n.value.columns, (s, d) => {
        n.value.columns[d].hidden = s.can_be_hidden ? !r.value.defaultVisibleToggleableColumns.includes(s.key) : !1;
      }), n.value.sort = null, n.value.cursor = null, n.value.page = 1;
    }
    const ee = {};
    function E(s, d) {
      clearTimeout(ee[s]), ee[s] = setTimeout(() => {
        A.value && o.preventOverlappingRequests && A.value.cancel();
        const p = V("searchInputs", s);
        n.value.searchInputs[p].value = d, n.value.cursor = null, n.value.page = 1;
      }, o.inputDebounceMs);
    }
    function te(s) {
      E("global", s);
    }
    function re(s, d) {
      const p = V("filters", s);
      n.value.filters[p].value = d, n.value.cursor = null, n.value.page = 1;
    }
    function ne(s) {
      n.value.cursor = null, n.value.perPage = s, n.value.page = 1;
    }
    function V(s, d) {
      return Fe(n.value[s], (p) => p.key == d);
    }
    function se(s, d) {
      const p = V("columns", s);
      n.value.columns[p].hidden = !d;
    }
    function fe() {
      let s = {};
      return T(n.value.searchInputs, (d) => {
        d.value !== null && (s[d.key] = d.value);
      }), T(n.value.filters, (d) => {
        d.value !== null && (s[d.key] = d.value);
      }), s;
    }
    function pe() {
      const s = n.value.columns;
      let d = Be(s, (v) => !v.hidden), p = Oe(d, (v) => v.key).sort();
      return Pe(p, r.value.defaultVisibleToggleableColumns) ? {} : p;
    }
    function ge() {
      const s = fe(), d = pe(), p = {};
      Object.keys(s).length > 0 && (p.filter = s), Object.keys(d).length > 0 && (p.columns = d);
      const v = n.value.cursor, b = n.value.page, L = n.value.sort, ue = n.value.perPage;
      return v && (p.cursor = v), b > 1 && (p.page = b), ue > 1 && (p.perPage = ue), L && (p.sort = L), p;
    }
    function ve() {
      const s = K.parse(location.search.substring(1)), d = o.name === "default" ? "" : o.name + "_";
      T(["filter", "columns", "cursor", "sort"], (v) => {
        delete s[d + v];
      }), delete s[f.value], T(ge(), (v, b) => {
        b === "page" ? s[f.value] = v : b === "perPage" ? s.perPage = v : s[d + b] = v;
      });
      let p = K.stringify(s, {
        filter(v, b) {
          return typeof b == "object" && b !== null ? Te(b) : b;
        },
        skipNulls: !0,
        strictNullHandling: !0
      });
      return (!p || p === f.value + "=1") && (p = ""), p;
    }
    const N = S(!1), A = S(null);
    function H(s) {
      !s || i.get(
        s,
        {},
        {
          replace: !0,
          preserveState: !0,
          preserveScroll: o.preserveScroll !== !1,
          onBefore() {
            N.value = !0;
          },
          onCancelToken(d) {
            A.value = d;
          },
          onFinish() {
            N.value = !1;
          },
          onSuccess() {
            if ("queryBuilderProps" in i.page.props && (n.value.cursor = r.value.cursor, n.value.page = r.value.page), o.preserveScroll === "table-top") {
              const p = F.value.getBoundingClientRect().top + window.pageYOffset + -8;
              window.scrollTo({ top: p });
            }
            c.value++;
          }
        }
      );
    }
    U(n, () => {
      H(location.pathname + "?" + ve());
    }, { deep: !0 });
    const le = () => {
      c.value++;
    };
    Q(() => {
      document.addEventListener("inertia:success", le);
    }), we(() => {
      document.removeEventListener("inertia:success", le);
    });
    function ae(s) {
      n.value.sort == s ? n.value.sort = `-${s}` : n.value.sort = s, n.value.cursor = null, n.value.page = 1;
    }
    function G(s) {
      const d = V("columns", s);
      return !n.value.columns[d].hidden;
    }
    function oe(s) {
      const d = V("columns", s), p = qe(r.value.columns[d]);
      return p.onSort = ae, p;
    }
    return (s, d) => (a(), x(xe, null, {
      default: C(() => [
        (a(), h("fieldset", {
          ref_key: "tableFieldset",
          ref: F,
          key: `table-${e.name}`,
          dusk: `table-${e.name}`,
          class: $(["min-w-0", { "opacity-75": N.value }])
        }, [
          l("div", ar, [
            l("div", or, [
              y(s.$slots, "tableFilter", {
                hasFilters: t(r).hasFilters,
                hasEnabledFilters: t(r).hasEnabledFilters,
                filters: t(r).filters,
                onFilterChange: re
              }, () => [
                t(r).hasFilters ? (a(), x(Tt, {
                  key: 0,
                  "has-enabled-filters": t(r).hasEnabledFilters,
                  filters: t(r).filters,
                  "on-filter-change": re
                }, null, 8, ["has-enabled-filters", "filters"])) : k("", !0)
              ])
            ]),
            t(r).globalSearch ? (a(), h("div", ur, [
              y(s.$slots, "tableGlobalSearch", {
                hasGlobalSearch: t(r).globalSearch,
                label: t(r).globalSearch ? t(r).globalSearch.label : null,
                value: t(r).globalSearch ? t(r).globalSearch.value : null,
                onChange: te
              }, () => [
                t(r).globalSearch ? (a(), x(Lt, {
                  key: 0,
                  class: "flex-grow",
                  label: t(r).globalSearch.label,
                  value: t(r).globalSearch.value,
                  "on-change": te
                }, null, 8, ["label", "value"])) : k("", !0)
              ])
            ])) : k("", !0),
            y(s.$slots, "tableReset", {
              canBeReset: "canBeReset",
              onClick: Z
            }, () => [
              t(he) ? (a(), h("div", ir, [
                z(Yt, { "on-click": Z })
              ])) : k("", !0)
            ]),
            y(s.$slots, "tableAddSearchRow", {
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
            y(s.$slots, "tableColumns", {
              hasColumns: t(r).hasToggleableColumns,
              columns: t(r).columns,
              hasHiddenColumns: t(r).hasHiddenColumns,
              onChange: se
            }, () => [
              t(r).hasToggleableColumns ? (a(), x($t, {
                key: 0,
                class: "order-4 me-4 sm:me-0 sm:order-5",
                columns: t(r).columns,
                "has-hidden-columns": t(r).hasHiddenColumns,
                "on-change": se
              }, null, 8, ["columns", "has-hidden-columns"])) : k("", !0)
            ])
          ]),
          y(s.$slots, "tableSearchRows", {
            hasSearchRowsWithValue: t(r).hasSearchInputsWithValue,
            searchInputs: t(r).searchInputsWithoutGlobal,
            forcedVisibleSearchInputs: m.value,
            onChange: E
          }, () => [
            t(r).hasSearchInputsWithValue || m.value.length > 0 ? (a(), x(Gt, {
              key: 0,
              "search-inputs": t(r).searchInputsWithoutGlobal,
              "forced-visible-search-inputs": m.value,
              "on-change": E,
              "on-remove": de
            }, null, 8, ["search-inputs", "forced-visible-search-inputs"])) : k("", !0)
          ]),
          y(s.$slots, "tableWrapper", { meta: t(j) }, () => [
            z(sr, {
              class: $({ "mt-3": !t(q) })
            }, {
              default: C(() => [
                y(s.$slots, "table", {}, () => [
                  l("table", cr, [
                    l("thead", dr, [
                      y(s.$slots, "head", {
                        show: G,
                        sortBy: ae,
                        header: oe
                      }, () => [
                        l("tr", hr, [
                          (a(!0), h(P, null, O(t(r).columns, (p) => (a(), x(Ne, {
                            key: `table-${e.name}-header-${p.key}`,
                            cell: oe(p.key)
                          }, null, 8, ["cell"]))), 128))
                        ])
                      ])
                    ]),
                    l("tbody", fr, [
                      y(s.$slots, "body", { show: G }, () => [
                        (a(!0), h(P, null, O(t(w), (p, v) => (a(), h("tr", {
                          key: `table-${e.name}-row-${v}`,
                          class: $(["", {
                            "bg-gray-50": e.striped && v % 2,
                            "hover:bg-gray-100": e.striped,
                            "hover:bg-gray-50": !e.striped
                          }])
                        }, [
                          (a(!0), h(P, null, O(t(r).columns, (b) => D((a(), h("td", {
                            key: `table-${e.name}-row-${v}-column-${b.key}`,
                            class: "text-sm py-4 px-6 text-gray-500 whitespace-nowrap"
                          }, [
                            y(s.$slots, `cell(${b.key})`, { item: p }, () => [
                              M(g(p[b.key]), 1)
                            ])
                          ])), [
                            [R, G(b.key)]
                          ])), 128))
                        ], 2))), 128))
                      ])
                    ])
                  ])
                ]),
                y(s.$slots, "pagination", {
                  onClick: H,
                  hasData: t(W),
                  meta: t(j),
                  perPageOptions: t(r).perPageOptions,
                  onPerPageChange: ne
                }, () => [
                  z(ct, {
                    "on-click": H,
                    "has-data": t(W),
                    meta: t(j),
                    "per-page-options": t(r).perPageOptions,
                    "on-per-page-change": ne
                  }, null, 8, ["has-data", "meta", "per-page-options"])
                ])
              ]),
              _: 3
            }, 8, ["class"])
          ])
        ], 10, lr))
      ]),
      _: 3
    }));
  }
};
export {
  Y as ButtonWithDropdown,
  Ne as HeaderCell,
  je as OnClickOutside,
  ct as Pagination,
  Pr as Table,
  pt as TableAddSearchRow,
  $t as TableColumns,
  Tt as TableFilter,
  Lt as TableGlobalSearch,
  Yt as TableReset,
  Gt as TableSearchRows,
  sr as TableWrapper,
  ce as getTranslations,
  Br as setTranslation,
  Fr as setTranslations
};
