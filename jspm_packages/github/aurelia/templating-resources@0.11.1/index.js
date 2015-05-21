System.register(['./compose', './if', './with', './repeat', './show', './global-behavior', './sanitize-html', './replaceable', './virtual-repeat', './virtual-scroll'], function (_export) {
  var Compose, If, With, Repeat, Show, GlobalBehavior, SanitizeHtmlValueConverter, Replaceable, VirtualRepeat, VirtualScroll;

  function configure(aurelia) {
    aurelia.globalizeResources('./compose', './if', './with', './repeat', './show', './replaceable', './global-behavior', './sanitize-html', './virtual-repeat', './virtual-scroll');
  }

  return {
    setters: [function (_compose) {
      Compose = _compose.Compose;
    }, function (_if) {
      If = _if.If;
    }, function (_with) {
      With = _with.With;
    }, function (_repeat) {
      Repeat = _repeat.Repeat;
    }, function (_show) {
      Show = _show.Show;
    }, function (_globalBehavior) {
      GlobalBehavior = _globalBehavior.GlobalBehavior;
    }, function (_sanitizeHtml) {
      SanitizeHtmlValueConverter = _sanitizeHtml.SanitizeHtmlValueConverter;
    }, function (_replaceable) {
      Replaceable = _replaceable.Replaceable;
    }, function (_virtualRepeat) {
      VirtualRepeat = _virtualRepeat.VirtualRepeat;
    }, function (_virtualScroll) {
      VirtualScroll = _virtualScroll.VirtualScroll;
    }],
    execute: function () {
      'use strict';

      _export('Compose', Compose);

      _export('If', If);

      _export('With', With);

      _export('Repeat', Repeat);

      _export('Show', Show);

      _export('SanitizeHtmlValueConverter', SanitizeHtmlValueConverter);

      _export('GlobalBehavior', GlobalBehavior);

      _export('Replaceable', Replaceable);

      _export('configure', configure);

      _export('VirtualRepeat', VirtualRepeat);

      _export('VirtualScroll', VirtualScroll);
    }
  };
});