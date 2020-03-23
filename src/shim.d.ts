/**
 * PIXI shims
 */

declare module '@pixi/core' {
    export { Renderer, Shader, Texture, BaseTexture } from 'pixi.js';
}

declare module '@pixi/loaders' {
    export { Loader, LoaderResource } from 'pixi.js';
}

declare module '@pixi/utils' {
    import { utils } from 'pixi.js';
    export import EventEmitter = utils.EventEmitter;
}

declare module '@pixi/app' {
    export { Application } from 'pixi.js';
}

declare module '@pixi/ticker' {
    export { TickerPlugin } from 'pixi.js';
}

declare module '@pixi/display' {
    export { DisplayObject, Container } from 'pixi.js';
}

declare module '@pixi/sprite' {
    export { Sprite } from 'pixi.js';
}

declare module '@pixi/math' {
    export { Matrix, Point, Rectangle, Bounds, Transform } from 'pixi.js';
}