const Base = require('./base');

const propsMap = {
  html: ['HTMLAttributes', 'HTMLElement'],
  a: [ 'AnchorHTMLAttributes', 'HTMLAnchorElement' ],
  abbr: [ 'HTMLAttributes', 'HTMLElement' ],
  address: [ 'HTMLAttributes', 'HTMLElement' ],
  area: [ 'AreaHTMLAttributes', 'HTMLAreaElement' ],
  article: [ 'HTMLAttributes', 'HTMLElement' ],
  aside: [ 'HTMLAttributes', 'HTMLElement' ],
  audio: [ 'AudioHTMLAttributes', 'HTMLAudioElement' ],
  b: [ 'HTMLAttributes', 'HTMLElement' ],
  base: [ 'BaseHTMLAttributes', 'HTMLBaseElement' ],
  bdi: [ 'HTMLAttributes', 'HTMLElement' ],
  bdo: [ 'HTMLAttributes', 'HTMLElement' ],
  big: [ 'HTMLAttributes', 'HTMLElement' ],
  blockquote: [ 'BlockquoteHTMLAttributes', 'HTMLElement' ],
  body: [ 'HTMLAttributes', 'HTMLBodyElement' ],
  br: [ 'HTMLAttributes', 'HTMLBRElement' ],
  button: [ 'ButtonHTMLAttributes', 'HTMLButtonElement' ],
  canvas: [ 'CanvasHTMLAttributes', 'HTMLCanvasElement' ],
  caption: [ 'HTMLAttributes', 'HTMLElement' ],
  cite: [ 'HTMLAttributes', 'HTMLElement' ],
  code: [ 'HTMLAttributes', 'HTMLElement' ],
  col: [ 'ColHTMLAttributes', 'HTMLTableColElement' ],
  colgroup: [ 'ColgroupHTMLAttributes', 'HTMLTableColElement' ],
  data: [ 'HTMLAttributes', 'HTMLElement' ],
  datalist: [ 'HTMLAttributes', 'HTMLDataListElement' ],
  dd: [ 'HTMLAttributes', 'HTMLElement' ],
  del: [ 'DelHTMLAttributes', 'HTMLElement' ],
  details: [ 'DetailsHTMLAttributes', 'HTMLElement' ],
  dfn: [ 'HTMLAttributes', 'HTMLElement' ],
  dialog: [ 'DialogHTMLAttributes', 'HTMLDialogElement' ],
  div: [ 'HTMLAttributes', 'HTMLDivElement' ],
  dl: [ 'HTMLAttributes', 'HTMLDListElement' ],
  dt: [ 'HTMLAttributes', 'HTMLElement' ],
  em: [ 'HTMLAttributes', 'HTMLElement' ],
  embed: [ 'EmbedHTMLAttributes', 'HTMLEmbedElement' ],
  fieldset: [ 'FieldsetHTMLAttributes', 'HTMLFieldSetElement' ],
  figcaption: [ 'HTMLAttributes', 'HTMLElement' ],
  figure: [ 'HTMLAttributes', 'HTMLElement' ],
  footer: [ 'HTMLAttributes', 'HTMLElement' ],
  form: [ 'FormHTMLAttributes', 'HTMLFormElement' ],
  h1: [ 'HTMLAttributes', 'HTMLHeadingElement' ],
  h2: [ 'HTMLAttributes', 'HTMLHeadingElement' ],
  h3: [ 'HTMLAttributes', 'HTMLHeadingElement' ],
  h4: [ 'HTMLAttributes', 'HTMLHeadingElement' ],
  h5: [ 'HTMLAttributes', 'HTMLHeadingElement' ],
  h6: [ 'HTMLAttributes', 'HTMLHeadingElement' ],
  head: [ 'HTMLAttributes', 'HTMLElement' ],
  header: [ 'HTMLAttributes', 'HTMLElement' ],
  hgroup: [ 'HTMLAttributes', 'HTMLElement' ],
  hr: [ 'HTMLAttributes', 'HTMLHRElement' ],
  i: [ 'HTMLAttributes', 'HTMLElement' ],
  iframe: [ 'IframeHTMLAttributes', 'HTMLIFrameElement' ],
  img: [ 'ImgHTMLAttributes', 'HTMLImageElement' ],
  input: [ 'InputHTMLAttributes', 'HTMLInputElement' ],
  ins: [ 'InsHTMLAttributes', 'HTMLModElement' ],
  kbd: [ 'HTMLAttributes', 'HTMLElement' ],
  keygen: [ 'KeygenHTMLAttributes', 'HTMLElement' ],
  label: [ 'LabelHTMLAttributes', 'HTMLLabelElement' ],
  legend: [ 'HTMLAttributes', 'HTMLLegendElement' ],
  li: [ 'LiHTMLAttributes', 'HTMLLIElement' ],
  link: [ 'LinkHTMLAttributes', 'HTMLLinkElement' ],
  main: [ 'HTMLAttributes', 'HTMLElement' ],
  map: [ 'MapHTMLAttributes', 'HTMLMapElement' ],
  mark: [ 'HTMLAttributes', 'HTMLElement' ],
  menu: [ 'MenuHTMLAttributes', 'HTMLElement' ],
  menuitem: [ 'HTMLAttributes', 'HTMLElement' ],
  meta: [ 'MetaHTMLAttributes', 'HTMLMetaElement' ],
  meter: [ 'MeterHTMLAttributes', 'HTMLElement' ],
  nav: [ 'HTMLAttributes', 'HTMLElement' ],
  noscript: [ 'HTMLAttributes', 'HTMLElement' ],
  object: [ 'ObjectHTMLAttributes', 'HTMLObjectElement' ],
  ol: [ 'OlHTMLAttributes', 'HTMLOListElement' ],
  optgroup: [ 'OptgroupHTMLAttributes', 'HTMLOptGroupElement' ],
  option: [ 'OptionHTMLAttributes', 'HTMLOptionElement' ],
  output: [ 'OutputHTMLAttributes', 'HTMLElement' ],
  p: [ 'HTMLAttributes', 'HTMLParagraphElement' ],
  param: [ 'ParamHTMLAttributes', 'HTMLParamElement' ],
  picture: [ 'HTMLAttributes', 'HTMLElement' ],
  pre: [ 'HTMLAttributes', 'HTMLPreElement' ],
  progress: [ 'ProgressHTMLAttributes', 'HTMLProgressElement' ],
  q: [ 'QuoteHTMLAttributes', 'HTMLQuoteElement' ],
  rp: [ 'HTMLAttributes', 'HTMLElement' ],
  rt: [ 'HTMLAttributes', 'HTMLElement' ],
  ruby: [ 'HTMLAttributes', 'HTMLElement' ],
  s: [ 'HTMLAttributes', 'HTMLElement' ],
  samp: [ 'HTMLAttributes', 'HTMLElement' ],
  script: [ 'ScriptHTMLAttributes', 'HTMLScriptElement' ],
  section: [ 'HTMLAttributes', 'HTMLElement' ],
  select: [ 'SelectHTMLAttributes', 'HTMLSelectElement' ],
  small: [ 'HTMLAttributes', 'HTMLElement' ],
  source: [ 'SourceHTMLAttributes', 'HTMLSourceElement' ],
  span: [ 'HTMLAttributes', 'HTMLSpanElement' ],
  strong: [ 'HTMLAttributes', 'HTMLElement' ],
  style: [ 'StyleHTMLAttributes', 'HTMLStyleElement' ],
  sub: [ 'HTMLAttributes', 'HTMLElement' ],
  summary: [ 'HTMLAttributes', 'HTMLElement' ],
  sup: [ 'HTMLAttributes', 'HTMLElement' ],
  table: [ 'TableHTMLAttributes', 'HTMLTableElement' ],
  tbody: [ 'HTMLAttributes', 'HTMLTableSectionElement' ],
  td: [ 'TdHTMLAttributes', 'HTMLTableDataCellElement' ],
  textarea: [ 'TextareaHTMLAttributes', 'HTMLTextAreaElement' ],
  tfoot: [ 'HTMLAttributes', 'HTMLTableSectionElement' ],
  th: [ 'ThHTMLAttributes', 'HTMLTableHeaderCellElement' ],
  thead: [ 'HTMLAttributes', 'HTMLTableSectionElement' ],
  time: [ 'TimeHTMLAttributes', 'HTMLElement' ],
  title: [ 'HTMLAttributes', 'HTMLTitleElement' ],
  tr: [ 'HTMLAttributes', 'HTMLTableRowElement' ],
  track: [ 'TrackHTMLAttributes', 'HTMLTrackElement' ],
  u: [ 'HTMLAttributes', 'HTMLElement' ],
  ul: [ 'HTMLAttributes', 'HTMLUListElement' ],
  var: [ 'HTMLAttributes', 'HTMLElement' ],
  video: [ 'VideoHTMLAttributes', 'HTMLVideoElement' ],
  wbr: [ 'HTMLAttributes', 'HTMLElement' ],
  webview: [ 'WebViewHTMLAttributes', 'HTMLWebViewElement' ]
};

const CONFLICT_PROP_NAMES = ['defaultValue', 'hidden', 'title', 'onChange', 'onClick', 'onSelect', 'onKeyDown', 'onMouseEnter', 'onMouseLeave', 'onError'];
function getConflictPropNames(props) {
  return Object.keys(props).filter(name => CONFLICT_PROP_NAMES.indexOf(name) > -1);
}

module.exports = class Interface extends Base {
  generateProps() {
    return Object.keys(this.props).map(name => {
      const prop = this.props[name];
      const value = this.mapping(name, prop);
      const description = prop.description || '';
      const required = prop.required || false;

      return `
        /**
         ${description.split('\n').map(line => '* ' + line).join('\n')}
          */
        ${name}${required ? '' : '?'}: ${value};
      `;
    }).join('');
  }

  toString() {
    if (this.propsExtends === false) {
      return `export interface ${this.name}Props {
        ${this.generateProps()}
      }\n`;
    }

    const reactAttributes = propsMap[this.propsExtends || 'html'];
    const extendsStr = ` extends React.${reactAttributes[0]}<${reactAttributes[1]}>`;
    const conflictPropNames = getConflictPropNames(this.props);
    if (conflictPropNames.length === 0) {
      return `export interface ${this.name}Props${extendsStr} {
        ${this.generateProps()}
      }\n`;
    }

    return `interface ${reactAttributes[0]}Weak${extendsStr} {
      ${conflictPropNames.map(name => `${name}?: any;`).join('\n')}
    }

    export interface ${this.name}Props extends ${reactAttributes[0]}Weak {
      ${this.generateProps()}
    }\n`;
  }
};
