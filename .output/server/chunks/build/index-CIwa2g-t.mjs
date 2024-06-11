import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$4 } from './server.mjs';
import { u as usePrintStore, _ as __nuxt_component_1, a as __nuxt_component_0$2, b as __nuxt_component_2, c as __nuxt_component_3 } from './CardShopPrice-Q2wmP61u.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ky from 'ky';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardShop",
  __ssrInlineRender: true,
  setup(__props) {
    const printStore = usePrintStore();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_card_shop_buy = __nuxt_component_2;
      const _component_USlideover = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-b722123b><div class="card_container" data-v-b722123b><!--[-->`);
      ssrRenderList(unref(printStore).prints, (card) => {
        _push(`<div class="card__item" data-v-b722123b>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product/${card.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card__img" data-v-b722123b${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Swiper), {
                "slides-p:er-view": 1,
                autoplay: "autoplay",
                "space-between": 0,
                onSwiper,
                onSlideChange
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(card.images, (image) => {
                            _push4(ssrRenderComponent(_component_NuxtImg, {
                              key: image.id,
                              src: image.src,
                              alt: image.alt,
                              loading: "lazy"
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(card.images, (image) => {
                              return openBlock(), createBlock(_component_NuxtImg, {
                                key: image.id,
                                src: image.src,
                                alt: image.alt,
                                loading: "lazy"
                              }, null, 8, ["src", "alt"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(SwiperSlide), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(card.images, (image) => {
                            return openBlock(), createBlock(_component_NuxtImg, {
                              key: image.id,
                              src: image.src,
                              alt: image.alt,
                              loading: "lazy"
                            }, null, 8, ["src", "alt"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="card__name" data-v-b722123b${_scopeId}>${ssrInterpolate(card.name)}</div><div class="card__description" data-v-b722123b${_scopeId}>${ssrInterpolate(card.description)}</div>`);
            } else {
              return [
                createVNode("div", { class: "card__img" }, [
                  createVNode(unref(Swiper), {
                    "slides-p:er-view": 1,
                    autoplay: "autoplay",
                    "space-between": 0,
                    onSwiper,
                    onSlideChange
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(SwiperSlide), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(card.images, (image) => {
                            return openBlock(), createBlock(_component_NuxtImg, {
                              key: image.id,
                              src: image.src,
                              alt: image.alt,
                              loading: "lazy"
                            }, null, 8, ["src", "alt"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "card__name" }, toDisplayString(card.name), 1),
                createVNode("div", { class: "card__description" }, toDisplayString(card.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(__nuxt_component_1, {
          price: card.price
        }, null, _parent));
        _push(ssrRenderComponent(_component_card_shop_buy, {
          onClick: ($event) => isOpen.value = true
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 flex-1" data-v-b722123b${_scopeId}> \u0424\u043E\u0440\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 </div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 flex-1" }, " \u0424\u043E\u0440\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardShop/CardShop.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b722123b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SectionShop",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    description: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-shop" }, _attrs))} data-v-3cab00a7><div class="section-shop_description" data-v-3cab00a7><div class="section-shop_title" data-v-3cab00a7>${ssrInterpolate(props.title)}</div><div class="section-shop_subtitle" data-v-3cab00a7>${ssrInterpolate(props.description)}</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionShop/SectionShop.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionShop = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3cab00a7"]]);
class BaseApiService {
  constructor() {
    __publicField(this, "api", ky.create({ prefixUrl: "https://jsonplaceholder.typicode.com/" }));
    __publicField(this, "apiKey", "key");
    __publicField(this, "header", { "API-KEY": this.apiKey });
  }
}
class TodoService extends BaseApiService {
  constructor() {
    super(...arguments);
    __publicField(this, "className", "TodoService");
  }
  async getTodo(id) {
    try {
      const todo = await this.api.get(`todos/${id}`).json();
      return todo;
    } catch (error) {
      console.log(`When fetching ${this.className} | Error: ${error}`);
    }
  }
}
const TodoService$1 = new TodoService();
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductsShop",
  __ssrInlineRender: true,
  setup(__props) {
    async function getTodoData() {
      console.log("getTodo");
      const todo = await TodoService$1.getTodo(1);
      console.log(todo);
    }
    getTodoData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardShop = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products" }, _attrs))} data-v-9ac3b6ae>`);
      _push(ssrRenderComponent(SectionShop, {
        title: "\u0410\u0412\u0422\u041E\u0420\u0421\u041A\u0418\u0415 \u041F\u0420\u0418\u041D\u0422\u042B",
        description: "\u041C\u043E\u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0444\u043E\u0442\u043E \u043F\u0440\u0438\u043D\u0442\u044B \u0432\u044B\u0441\u043A\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u041E\u043D\u0438 \u0441\u0442\u0430\u043D\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0443\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0434\u043E\u043C\u0430."
      }, null, _parent));
      _push(ssrRenderComponent(_component_CardShop, { class: "products__card" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductsShop/ProductsShop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductsShop = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9ac3b6ae"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(ProductsShop, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CIwa2g-t.mjs.map
