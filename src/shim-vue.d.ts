declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
declare module '*.svg' {
    import Vue, { VueConstructor } from 'vue';
    const content: VueConstructor<Vue>;
    export default content;
}