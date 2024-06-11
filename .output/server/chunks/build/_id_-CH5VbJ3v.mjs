import { defineComponent, toRef, computed, ref, watch, useSSRContext, mergeProps, unref, isRef, withCtx, openBlock, createBlock, createCommentVNode, createVNode, resolveDynamicComponent } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { u as usePrintStore, a as __nuxt_component_0$2, _ as __nuxt_component_1$1, b as __nuxt_component_2, c as __nuxt_component_3 } from './CardShopPrice-Q2wmP61u.mjs';
import { m as mergeConfig, b as appConfig, c as __nuxt_component_0$1, d as useUI, _ as _export_sfc, e as useRoute } from './server.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const divider = {
  wrapper: {
    base: "flex items-center align-center text-center",
    horizontal: "w-full flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        xs: "border-t-[2px]",
        sm: "border-t-[3px]",
        md: "border-t-[4px]",
        lg: "border-t-[5px]",
        xl: "border-t-[6px]"
      },
      vertical: {
        "2xs": "border-s",
        xs: "border-s-[2px]",
        sm: "border-s-[3px]",
        md: "border-s-[4px]",
        lg: "border-s-[5px]",
        xl: "border-s-[6px]"
      }
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm",
  default: {
    size: "2xs"
  }
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$4 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: "img"
    },
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$1.default.icon
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$1.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$1.default.chipPosition,
      validator(value) {
        return Object.keys(config$1.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$1);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$1;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs, { onError: _ctx.onError }), null), _parent);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$1,
    UAvatar: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.border.size.horizontal).includes(value) || Object.keys(config.border.size.vertical).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation][props.size],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$1;
  const _component_UAvatar = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CartShopForm",
  __ssrInlineRender: true,
  props: {
    print: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_card_shop_price = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-form" }, _attrs))} data-v-28076550><div class="cart-form_container" data-v-28076550><h3 data-v-28076550>\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437</h3>`);
      _push(ssrRenderComponent(_component_UDivider, null, null, _parent));
      if (props.print) {
        _push(`<div class="cart-form__product" data-v-28076550><div class="cart-form__product_left" data-v-28076550><div class="cart-form__product_img" data-v-28076550><!--[-->`);
        ssrRenderList(props.print.images, (image) => {
          _push(ssrRenderComponent(_component_NuxtImg, {
            key: image.id,
            src: image.src,
            alt: image.alt,
            preload: ""
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="cart-form__product_description" data-v-28076550><h4 data-v-28076550>${ssrInterpolate(props.print.name)}</h4><span data-v-28076550>${ssrInterpolate(props.print.vendorCode)}</span></div></div><div class="cart-form__product_right" data-v-28076550><div class="plus" data-v-28076550>+</div><div class="div" data-v-28076550>1</div><div class="plus" data-v-28076550>+</div>`);
        _push(ssrRenderComponent(_component_card_shop_price, {
          price: props.print.price
        }, null, _parent));
        _push(`<div class="cancel" data-v-28076550>X</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartShop/CartShopForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-28076550"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardShopProduct",
  __ssrInlineRender: true,
  setup(__props) {
    const { id } = useRoute().params;
    const printsStore = usePrintStore();
    const printCard = printsStore.getPrintCard(Number(id));
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_card_shop_price = __nuxt_component_1$1;
      const _component_card_shop_buy = __nuxt_component_2;
      const _component_USlideover = __nuxt_component_3;
      const _component_cart_shop_form = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "print-product" }, _attrs))} data-v-9996bae9><div class="print-product_container" data-v-9996bae9>`);
      if (unref(printCard)) {
        _push(`<div class="print-product__item" data-v-9996bae9><div class="print-product__image" data-v-9996bae9><!--[-->`);
        ssrRenderList(unref(printCard).images, (image) => {
          _push(ssrRenderComponent(_component_NuxtImg, {
            key: image.id,
            src: image.src,
            alt: image.alt,
            preload: ""
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="print-product__about" data-v-9996bae9><h3 data-v-9996bae9>${ssrInterpolate(unref(printCard).name)}</h3><span data-v-9996bae9>\u0410\u0440\u0442\u0438\u043A\u0443\u043B: \u0414\u041A1001-3</span>`);
        _push(ssrRenderComponent(_component_card_shop_price, {
          price: unref(printCard).price
        }, null, _parent));
        _push(ssrRenderComponent(_component_card_shop_buy, {
          onClick: ($event) => isOpen.value = true
        }, null, _parent));
        _push(`<br data-v-9996bae9><br data-v-9996bae9><p data-v-9996bae9>\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0431\u0443\u043C\u0430\u0433\u0438:</p><p data-v-9996bae9><span data-v-9996bae9>\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C:</span> Innova Art</p><p data-v-9996bae9><span data-v-9996bae9>\u0422\u0438\u043F \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F:</span> \u041C\u0430\u0442\u043E\u0432\u043E\u0435</p><p data-v-9996bae9><span data-v-9996bae9>\u0422\u0435\u043A\u0441\u0442\u0443\u0440\u0430:</span> \u041B\u0435\u0433\u043A\u0430\u044F</p><p data-v-9996bae9><span data-v-9996bae9>\u0426\u0432\u0435\u0442:</span> \u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439</p><p data-v-9996bae9><span data-v-9996bae9>\u0422\u0438\u043F \u0447\u0435\u0440\u043D\u0438\u043B:</span> \u041F\u0438\u0433\u043C\u0435\u043D\u0442\u043D\u044B\u0435 \u0447\u0435\u0440\u043D\u0438\u043B\u0430</p><p data-v-9996bae9><span data-v-9996bae9>\u0420\u0430\u0437\u043C\u0435\u0440 \u043F\u0440\u0438\u043D\u0442\u0430:</span> 60x80\u0441\u043C</p><br data-v-9996bae9><ul data-v-9996bae9><li data-v-9996bae9>\u2022 \u0410\u0432\u0442\u043E\u0433\u0440\u0430\u0444 \u043E\u0442 \u0415\u0432\u0433\u0435\u043D\u0438\u044F \u0417\u0443\u0431\u0430\u0440\u0435\u0432\u0430</li><li data-v-9996bae9>\u2022 \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u041C\u043E\u0441\u043A\u0432\u0435 \u0434\u043E \u0434\u0432\u0435\u0440\u0438</li><li data-v-9996bae9>\u2022 \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u043E\u0442 2 \u0434\u043E 7 \u0434\u043D\u0435\u0439 \u0434\u043E \u043F\u0443\u043D\u043A\u0442\u0430 \u0421\u0414\u042D\u041A</li></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(printCard)) {
              _push2(ssrRenderComponent(_component_cart_shop_form, { print: unref(printCard) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(printCard) ? (openBlock(), createBlock(_component_cart_shop_form, {
                key: 0,
                print: unref(printCard)
              }, null, 8, ["print"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardShop/CardShopProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardShopProduct = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9996bae9"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(CardShopProduct, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CH5VbJ3v.mjs.map
