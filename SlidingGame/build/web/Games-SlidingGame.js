(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korma-root-korma', 'kds-root-kds', 'korio-root-korio', 'korge-root-korge', 'klock-root-klock', 'korim-root-korim'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korma-root-korma'), require('kds-root-kds'), require('korio-root-korio'), require('korge-root-korge'), require('klock-root-klock'), require('korim-root-korim'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Games-SlidingGame'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'Games-SlidingGame'.");
    }if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'Games-SlidingGame'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'Games-SlidingGame'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'Games-SlidingGame'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'Games-SlidingGame'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'Games-SlidingGame'.");
    }root['Games-SlidingGame'] = factory(typeof this['Games-SlidingGame'] === 'undefined' ? {} : this['Games-SlidingGame'], kotlin, this['korma-root-korma'], this['kds-root-kds'], this['korio-root-korio'], this['korge-root-korge'], this['klock-root-klock'], this['korim-root-korim']);
  }
}(this, function (_, Kotlin, $module$korma_root_korma, $module$kds_root_kds, $module$korio_root_korio, $module$korge_root_korge, $module$klock_root_klock, $module$korim_root_korim) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Pair = Kotlin.kotlin.Pair;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var PointInt = $module$korma_root_korma.com.soywiz.korma.geom.PointInt;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var Signal = $module$korio_root_korio.com.soywiz.korio.async.Signal;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var Array2 = $module$kds_root_kds.com.soywiz.kds.Array2;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var throwCCE = Kotlin.throwCCE;
  var Array_0 = Array;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Extra$Property = $module$kds_root_kds.com.soywiz.kds.Extra.Property;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Easing = $module$korma_root_korma.com.soywiz.korma.interpolation.Easing;
  var tween = $module$korge_root_korge.com.soywiz.korge.tween.tween_t8t7it$;
  var launchImmediately = $module$korio_root_korio.com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var Any = Object;
  var setExtra = $module$kds_root_kds.com.soywiz.kds.setExtra_46skc7$;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately_0 = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var get_keys = $module$korge_root_korge.com.soywiz.korge.input.get_keys_gohfi1$;
  var _interpolate = $module$korge_root_korge.com.soywiz.korge.tween._interpolate_yvo9jy$;
  var getCallableRef = Kotlin.getCallableRef;
  var V2_init = $module$korge_root_korge.com.soywiz.korge.tween.V2;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var AsyncSignal = $module$korio_root_korio.com.soywiz.korio.async.AsyncSignal;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var alignLeftToRightOf = $module$korge_root_korge.com.soywiz.korge.view.alignLeftToRightOf_qcv975$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var alignTopToBottomOf = $module$korge_root_korge.com.soywiz.korge.view.alignTopToBottomOf_qcv975$;
  var alignTopToTopOf = $module$korge_root_korge.com.soywiz.korge.view.alignTopToTopOf_qcv975$;
  var position_0 = $module$korge_root_korge.com.soywiz.korge.view.position_2cbtc5$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_38ydlf$;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nayhkp$;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var get_defaultUISkin = $module$korge_root_korge.com.soywiz.korge.ui.get_defaultUISkin_gohfi1$;
  var get_defaultUIFont = $module$korge_root_korge.com.soywiz.korge.ui.get_defaultUIFont_gohfi1$;
  var TextButton_init = $module$korge_root_korge.com.soywiz.korge.ui.TextButton;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var color_0 = $module$korge_root_korge.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
  var Fonts = $module$korge_root_korge.com.soywiz.korge.view.Fonts;
  var Text = $module$korge_root_korge.com.soywiz.korge.view.Text;
  var Math_0 = Math;
  var Container_init = $module$korge_root_korge.com.soywiz.korge.view.Container;
  var SolidRect_init = $module$korge_root_korge.com.soywiz.korge.view.SolidRect;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  function Direction(name, ordinal, diff) {
    Enum.call(this);
    this.diff = diff;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$UP_instance = new Direction('UP', 0, new Pair(0, -1));
    Direction$DOWN_instance = new Direction('DOWN', 1, new Pair(0, 1));
    Direction$LEFT_instance = new Direction('LEFT', 2, new Pair(-1, 0));
    Direction$RIGHT_instance = new Direction('RIGHT', 3, new Pair(1, 0));
  }
  var Direction$UP_instance;
  function Direction$UP_getInstance() {
    Direction_initFields();
    return Direction$UP_instance;
  }
  var Direction$DOWN_instance;
  function Direction$DOWN_getInstance() {
    Direction_initFields();
    return Direction$DOWN_instance;
  }
  var Direction$LEFT_instance;
  function Direction$LEFT_getInstance() {
    Direction_initFields();
    return Direction$LEFT_instance;
  }
  var Direction$RIGHT_instance;
  function Direction$RIGHT_getInstance() {
    Direction_initFields();
    return Direction$RIGHT_instance;
  }
  Direction.prototype.inv = function () {
    switch (this.name) {
      case 'UP':
        return Direction$DOWN_getInstance();
      case 'DOWN':
        return Direction$UP_getInstance();
      case 'LEFT':
        return Direction$RIGHT_getInstance();
      case 'RIGHT':
        return Direction$LEFT_getInstance();
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$UP_getInstance(), Direction$DOWN_getInstance(), Direction$LEFT_getInstance(), Direction$RIGHT_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'UP':
        return Direction$UP_getInstance();
      case 'DOWN':
        return Direction$DOWN_getInstance();
      case 'LEFT':
        return Direction$LEFT_getInstance();
      case 'RIGHT':
        return Direction$RIGHT_getInstance();
      default:throwISE('No enum constant Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function Board(width, height) {
    if (width === void 0)
      width = 4;
    if (height === void 0)
      height = 4;
    this.width = width;
    this.height = height;
    this.board = null;
    this.gameOverSignal_0 = new Signal();
    this.moveSignal_0 = new Signal();
    var size = Kotlin.imul(this.width, this.height);
    var list = ArrayList_init(size);
    for (var index = 0; index < size; index++) {
      list.add_11rb$(index);
    }
    var arr = shuffled(list);
    var width_0 = this.width;
    var height_0 = this.height;
    var tmp$;
    var array = Array_0(Kotlin.imul(width_0, height_0));
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      var gen$result;
      var index_0 = arr.get_za3lpa$(i);
      if ((index_0 + 1 | 0) < Kotlin.imul(this.width, this.height)) {
        gen$result = new Board$FragmentCell(this, i % this.width, i / this.width | 0, index_0 + 1 | 0);
      } else {
        gen$result = Board$EmptyCell_getInstance();
      }
      array[i] = gen$result;
    }
    this.board = new Array2(width_0, height_0, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
    this.moveSignal_0.invoke_qlkmfe$(Board_init$lambda(this));
  }
  function Board$Cell() {
  }
  Board$Cell.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Cell',
    interfaces: []
  };
  function Board$EmptyCell() {
    Board$EmptyCell_instance = this;
  }
  Board$EmptyCell.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyCell',
    interfaces: [Board$Cell]
  };
  var Board$EmptyCell_instance = null;
  function Board$EmptyCell_getInstance() {
    if (Board$EmptyCell_instance === null) {
      new Board$EmptyCell();
    }return Board$EmptyCell_instance;
  }
  function Board$FragmentCell($outer, x, y, index) {
    this.$outer = $outer;
    this.index = index;
    this.$delegate_krw0km$_0 = new Extra$Mixin();
    this.pos_0 = PointInt.Companion.invoke_vux9f0$(x, y);
  }
  Object.defineProperty(Board$FragmentCell.prototype, 'position', {
    get: function () {
      return clone(this.pos_0);
    }
  });
  Board$FragmentCell.prototype.getRelativePosition_mlm8fl$ = function (to) {
    var tmp$;
    var pos = this.position;
    if (pos != null ? pos.equals(to) : null)
      tmp$ = null;
    else if (pos.y === to.y)
      tmp$ = pos.x < to.x ? Direction$RIGHT_getInstance() : Direction$LEFT_getInstance();
    else if (pos.x === to.x)
      tmp$ = pos.y < to.y ? Direction$DOWN_getInstance() : Direction$UP_getInstance();
    else
      tmp$ = null;
    return tmp$;
  };
  Board$FragmentCell.prototype.move_h80bq7$ = function (direction) {
    var newPos = plus(this.position, direction.diff);
    var tmp$ = this.$outer.board.inside_vux9f0$(newPos.x, newPos.y);
    if (tmp$) {
      tmp$ = Kotlin.isType(this.$outer.board.get_vux9f0$(newPos.x, newPos.y), Board$EmptyCell);
    }if (tmp$) {
      var old = this.position;
      this.pos_0.setTo_kp3ah4$(newPos);
      var $receiver = this.$outer.board;
      var value = Board$EmptyCell_getInstance();
      $receiver.set_vq7693$(old.x, old.y, value);
      var p = this.pos_0;
      this.$outer.board.set_vq7693$(p.x, p.y, this);
      this.$outer.moveSignal_0.invoke_11rb$(old);
      return true;
    }return false;
  };
  Object.defineProperty(Board$FragmentCell.prototype, 'extra', {
    get: function () {
      return this.$delegate_krw0km$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_krw0km$_0.extra = tmp$;
    }
  });
  Board$FragmentCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FragmentCell',
    interfaces: [Extra, Board$Cell]
  };
  Object.defineProperty(Board.prototype, 'emptyPos', {
    get: function () {
      var it = first(this.board.getPositionsWithValue_11rb$(Board$EmptyCell_getInstance()));
      return PointInt.Companion.invoke_vux9f0$(it.first, it.second);
    }
  });
  Board.prototype.get_vux9f0$ = function (x, y) {
    return this.board.get_vux9f0$(x, y);
  };
  Board.prototype.get_mlm8fl$ = function (point) {
    return this.board.get_vux9f0$(point.x, point.y);
  };
  Board.prototype.gameOver_x41j5s$ = function (handler) {
    return this.gameOverSignal_0.once_qlkmfe$(handler);
  };
  Board.prototype.cleanUp = function () {
    this.moveSignal_0.clear();
    this.gameOverSignal_0.clear();
  };
  Board.prototype.checkComplete_0 = function () {
    var $receiver = this.board;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var i = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var transform$result;
      if (Kotlin.isType(item, Board$EmptyCell)) {
        transform$result = (i + 1 | 0) === Kotlin.imul(this.width, this.height);
      } else if (Kotlin.isType(item, Board$FragmentCell)) {
        transform$result = (i + 1 | 0) === item.index;
      } else {
        transform$result = false;
      }
      tmp$_1.call(destination, transform$result);
    }
    var all$result;
    all$break: do {
      var tmp$_2;
      if (Kotlin.isType(destination, Collection) && destination.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$_2 = destination.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!element) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  function Board_init$lambda(this$Board) {
    return function (it) {
      var cell = this$Board.board.get_vux9f0$(it.x, it.y);
      if (Kotlin.isType(cell, Board$EmptyCell) && it.x === (this$Board.width - 1 | 0) && it.y === (this$Board.height - 1 | 0) && this$Board.checkComplete_0()) {
        this$Board.gameOverSignal_0.invoke_11rb$(Unit);
      }return Unit;
    };
  }
  Board.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Board',
    interfaces: []
  };
  function Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda;
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately_0(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda(closure$handler, it));
      return Unit;
    };
  }
  function view$lambda() {
    return null;
  }
  var view;
  var view_metadata = new PropertyMetadata('view');
  function get_view($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = view.name) != null ? tmp$ : view_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = view.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = view.name) != null ? tmp$_3 : view_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_view($receiver, view_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = view.name) != null ? tmp$ : view_metadata.callableName, (tmp$_0 = view_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function Coroutine$init$lambda(closure$parent_0, this$init_0, closure$space_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$parent = closure$parent_0;
    this.local$this$init = this$init_0;
    this.local$closure$space = closure$space_0;
    this.local$tmp$ = void 0;
    this.local$emptyPos = void 0;
    this.local$pos = void 0;
    this.local$dir = void 0;
    this.local$tmp$_1 = void 0;
  }
  Coroutine$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init$lambda.prototype.constructor = Coroutine$init$lambda;
  Coroutine$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$emptyPos = this.local$closure$parent.emptyPos;
            this.local$pos = this.local$this$init.position;
            this.local$tmp$ = this.local$this$init.getRelativePosition_mlm8fl$(this.local$emptyPos);
            if (this.local$tmp$ == null) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$dir = this.local$tmp$;
            if (get_isVertical(this.local$dir)) {
              var from = this.local$emptyPos.y;
              var to = this.local$pos.y;
              var $receiver = countTo(from, to);
              var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
              var tmp$_0;
              tmp$_0 = $receiver.iterator();
              while (tmp$_0.hasNext()) {
                var item = tmp$_0.next();
                destination.add_11rb$(PointInt.Companion.invoke_vux9f0$(this.local$pos.x, item));
              }
              tmp$ = destination;
            } else {
              var from_0 = this.local$emptyPos.x;
              var to_0 = this.local$pos.x;
              var $receiver_0 = countTo(from_0, to_0);
              var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
              var tmp$_1;
              tmp$_1 = $receiver_0.iterator();
              while (tmp$_1.hasNext()) {
                var item_0 = tmp$_1.next();
                destination_0.add_11rb$(PointInt.Companion.invoke_vux9f0$(item_0, this.local$pos.y));
              }
              tmp$ = destination_0;
            }

            this.local$tmp$_1 = drop(tmp$, 1).iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 6;
              continue;
            }
            var element = this.local$tmp$_1.next();
            var closure$parent = this.local$closure$parent;
            var closure$space = this.local$closure$space;
            var cell = closure$parent.get_mlm8fl$(element);
            if (Kotlin.isType(cell, Board$FragmentCell)) {
              this.state_0 = 4;
              this.result_0 = move(cell, this.local$dir, closure$space, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 3;
            continue;
          case 6:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function init$lambda(closure$parent_0, this$init_0, closure$space_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda(closure$parent_0, this$init_0, closure$space_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function init($receiver, view, parent, space) {
    set_view($receiver, view);
    var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$;
    if ((tmp$ = view != null ? get_mouse(view) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, init$lambda(parent, $receiver, space)));
    }}
  function Coroutine$init$lambda_0(this$init_0, closure$space_0, event_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$init = this$init_0;
    this.local$closure$space = closure$space_0;
    this.local$tmp$ = void 0;
    this.local$event = event_0;
  }
  Coroutine$init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init$lambda_0.prototype.constructor = Coroutine$init$lambda_0;
  Coroutine$init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = get_direction(this.local$event.key)) != null) {
              var this$init = this.local$this$init;
              var closure$space = this.local$closure$space;
              var tmp$_0, tmp$_1;
              var cellPos = plus(this$init.emptyPos, tmp$.diff);
              if (this$init.board.inside_vux9f0$(cellPos.x, cellPos.y)) {
                if ((tmp$_1 = Kotlin.isType(tmp$_0 = this$init.get_mlm8fl$(cellPos), Board$FragmentCell) ? tmp$_0 : null) != null) {
                  this.state_0 = 2;
                  this.result_0 = move(tmp$_1, tmp$.inv(), closure$space, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  this.result_0 = null;
                  this.state_0 = 3;
                  continue;
                }
              } else {
                this.state_0 = 4;
                continue;
              }
            } else {
              this.local$tmp$ = null;
              this.state_0 = 5;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$tmp$ = Unit;
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function init$lambda_0(this$init_0, closure$space_0) {
    return function (event_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda_0(this$init_0, closure$space_0, event_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function init_0($receiver_0, view, space) {
    var prop = getPropertyCallableRef('onKeyUp', 1, function ($receiver) {
      return $receiver.onKeyUp;
    });
    var tmp$;
    if ((tmp$ = view != null ? get_keys(view) : null) != null) {
      prop.get(tmp$).add_25kf2w$(init$lambda_0($receiver_0, space));
    }}
  function Coroutine$move$lambda(closure$direction_0, this$move_0, closure$space_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$direction = closure$direction_0;
    this.local$this$move = this$move_0;
    this.local$closure$space = closure$space_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$move$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$move$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$move$lambda.prototype.constructor = Coroutine$move$lambda;
  Coroutine$move$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            if (this.local$this$move.move_h80bq7$(this.local$closure$direction)) {
              this.local$tmp$ = get_view(this.local$this$move);
              if (this.local$tmp$ == null) {
                return;
              } else {
                this.state_0 = 2;
                continue;
              }
            } else {
              this.state_0 = 4;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var view = this.local$tmp$;
            tmp$ = new V2_init(getPropertyCallableRef('x', 0, function ($receiver) {
              return $receiver.x;
            }.bind(null, view), function ($receiver, value) {
              $receiver.x = value;
            }.bind(null, view)), view.x, view.x + this.local$closure$space * this.local$closure$direction.diff.first, getCallableRef('_interpolate', function (ratio, l, r) {
              return _interpolate(ratio, l, r);
            }), true);
            tmp$_0 = new V2_init(getPropertyCallableRef('y', 0, function ($receiver) {
              return $receiver.y;
            }.bind(null, view), function ($receiver, value) {
              $receiver.y = value;
            }.bind(null, view)), view.y, view.y + this.local$closure$space * this.local$closure$direction.diff.second, getCallableRef('_interpolate', function (ratio, l, r) {
              return _interpolate(ratio, l, r);
            }), true);
            tmp$_1 = Easing.Companion.EASE_IN_OUT;
            tmp$_2 = TimeSpan.Companion.fromMilliseconds_14dthe$(100);
            this.state_0 = 3;
            this.result_0 = tween(view, [tmp$, tmp$_0], tmp$_2, tmp$_1, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return Unit;
          case 4:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function move$lambda(closure$direction_0, this$move_0, closure$space_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$move$lambda(closure$direction_0, this$move_0, closure$space_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function move($receiver, direction, space, continuation) {
    launchImmediately(continuation.context, move$lambda(direction, $receiver, space));
  }
  function get_direction($receiver) {
    switch ($receiver.name) {
      case 'UP':
        return Direction$UP_getInstance();
      case 'DOWN':
        return Direction$DOWN_getInstance();
      case 'LEFT':
        return Direction$LEFT_getInstance();
      case 'RIGHT':
        return Direction$RIGHT_getInstance();
      default:return null;
    }
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda_0;
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda_0(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately_0(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda_0(closure$handler, it));
      return Unit;
    };
  }
  function textButton$lambda($receiver) {
    return Unit;
  }
  function text$lambda($receiver) {
    return Unit;
  }
  function container$lambda($receiver) {
    return Unit;
  }
  function solidRect$lambda($receiver) {
    return Unit;
  }
  function Coroutine$main$lambda$lambda$lambda$lambda(closure$newGame_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$newGame = closure$newGame_0;
  }
  Coroutine$main$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$newGame.invoke_11rb$(Unit, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda$lambda(closure$newGame_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda$lambda(closure$newGame_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda$lambda$lambda_0(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$main$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda$lambda$lambda_0;
  Coroutine$main$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda$lambda$lambda$lambda_0(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main$lambda$lambda$lambda(it) {
    return it.toString();
  }
  function Coroutine$main$lambda$lambda$lambda(closure$boardWidth_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardWidth = closure$boardWidth_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$boardWidth.v = this.local$it, Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda_0(closure$boardWidth_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda(closure$boardWidth_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda_1(closure$newGameButton) {
    return function ($receiver) {
      alignTopToBottomOf($receiver, closure$newGameButton, 20.0);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_2(it) {
    return it.toString();
  }
  function Coroutine$main$lambda$lambda$lambda_0(closure$boardHeight_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardHeight = closure$boardHeight_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda$lambda_0;
  Coroutine$main$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$boardHeight.v = this.local$it, Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda_3(closure$boardHeight_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda_0(closure$boardHeight_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda_4(closure$widthConf) {
    return function ($receiver) {
      alignTopToTopOf($receiver, closure$widthConf);
      alignLeftToRightOf($receiver, closure$widthConf, 40.0);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_1(this$, closure$gameOverText) {
    return function (it) {
      var tmp$ = closure$gameOverText;
      var $receiver = this$;
      var text = 'Game Over';
      var color_0_0;
      var font;
      color_0_0 = color_0.Colors.WHITE;
      font = Fonts.Companion.defaultFont;
      var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), $receiver);
      position_0($receiver_0, 20.0, 20.0);
      tmp$.v = $receiver_0;
      return Unit;
    };
  }
  function Coroutine$main$lambda$lambda(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$buttonContainer_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardContainer = closure$boardContainer_0;
    this.local$this$ = this$_0;
    this.local$closure$gameOverText = closure$gameOverText_0;
    this.local$closure$gameOverCloseable = closure$gameOverCloseable_0;
    this.local$closure$board = closure$board_0;
    this.local$closure$boardWidth = closure$boardWidth_0;
    this.local$closure$boardHeight = closure$boardHeight_0;
    this.local$closure$buttonContainer = closure$buttonContainer_0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$this$.removeChild_gohfih$(this.local$closure$boardContainer.v);
            this.local$this$.removeChild_gohfih$(this.local$closure$gameOverText.v);
            (tmp$ = this.local$closure$gameOverCloseable.v) != null ? (tmp$.close(), Unit) : null;
            (tmp$_0 = this.local$closure$board.v) != null ? (tmp$_0.cleanUp(), Unit) : null;
            var tmp$_1 = this.local$closure$board;
            var $receiver = new Board(this.local$closure$boardWidth.v, this.local$closure$boardHeight.v);
            var this$ = this.local$this$;
            var closure$boardWidth = this.local$closure$boardWidth;
            var closure$boardHeight = this.local$closure$boardHeight;
            var closure$boardContainer = this.local$closure$boardContainer;
            var closure$buttonContainer = this.local$closure$buttonContainer;
            var closure$gameOverText = this.local$closure$gameOverText;
            var closure$gameOverCloseable = this.local$closure$gameOverCloseable;
            var tmp$_2;
            position(this$, 100, 100);
            var a = this$.views.virtualWidth / (closure$boardWidth.v * 1.1) * 4 / 5;
            var b = this$.views.virtualHeight / (closure$boardHeight.v * 1.1) / 2;
            var blockSize = Math_0.min(a, b);
            closure$boardContainer.v = createBoard(this$, $receiver, blockSize);
            (tmp$_2 = closure$boardContainer.v) != null ? alignTopToBottomOf(tmp$_2, closure$buttonContainer, 20.0) : null;
            closure$gameOverCloseable.v = $receiver.gameOver_x41j5s$(main$lambda$lambda$lambda$lambda_1(this$, closure$gameOverText));
            return tmp$_1.v = $receiver, Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$buttonContainer_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$buttonContainer_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var board = {v: null};
            var boardContainer = {v: null};
            var gameOverText = {v: null};
            var gameOverCloseable = {v: null};
            var newGame = new AsyncSignal();
            var boardWidth = {v: 4};
            var boardHeight = {v: 4};
            var $receiver_0_0 = addTo(new Container_init(), this.local$$receiver);
            position($receiver_0_0, 40, 40);
            var $receiver_0_1 = addTo(new TextButton_init(128.0, 64.0, 'New Game', get_defaultUISkin($receiver_0_0), get_defaultUIFont($receiver_0_0)), $receiver_0_0);
            var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$;
            if ((tmp$ = $receiver_0_1 != null ? get_mouse($receiver_0_1) : null) != null) {
              prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda_0(tmp$, main$lambda$lambda$lambda$lambda(newGame)));
            }
            var newGameButton = $receiver_0_1;
            var $receiver_0_2 = addTo(new TextButton_init(128.0, 64.0, 'Solve', get_defaultUISkin($receiver_0_0), get_defaultUIFont($receiver_0_0)), $receiver_0_0);
            alignLeftToRightOf($receiver_0_2, newGameButton, 20.0);
            var prop_0 = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$_0;
            if ((tmp$_0 = $receiver_0_2 != null ? get_mouse($receiver_0_2) : null) != null) {
              prop_0.get(tmp$_0).add_qlkmfe$(doMouseEvent$lambda$lambda_0(tmp$_0, main$lambda$lambda$lambda$lambda_0));
            }
            var widthConf = configuration($receiver_0_0, 'Width:', boardWidth.v, main$lambda$lambda$lambda, new IntRange(0, 2147483647), main$lambda$lambda$lambda_0(boardWidth), main$lambda$lambda$lambda_1(newGameButton));
            configuration($receiver_0_0, 'Height:', boardHeight.v, main$lambda$lambda$lambda_2, new IntRange(0, 2147483647), main$lambda$lambda$lambda_3(boardHeight), main$lambda$lambda$lambda_4(widthConf));
            var buttonContainer = $receiver_0_0;
            newGame.invoke_25kf2w$(main$lambda$lambda(boardContainer, this.local$$receiver, gameOverText, gameOverCloseable, board, boardWidth, boardHeight, buttonContainer));
            this.state_0 = 2;
            this.result_0 = newGame.invoke_11rb$(Unit, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main(continuation) {
    return korge.Korge.invoke_hyfg37$(void 0, 1600, 900, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, color.Colors.get_61zpoe$('#2b2b2b'), void 0, void 0, void 0, void 0, void 0, void 0, main$lambda, continuation);
  }
  function createBoard($receiver, board, blockSize) {
    if (blockSize === void 0)
      blockSize = 100.0;
    var $receiver_0 = addTo(new Container_init(), $receiver);
    var tmp$, tmp$_0;
    var size = coerceAtMost(blockSize, 100.0);
    var padding = size / 10;
    tmp$ = board.width;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = board.height;
      for (var j = 0; j < tmp$_0; j++) {
        var cell = board.get_vux9f0$(i, j);
        if (Kotlin.isType(cell, Board$FragmentCell)) {
          var $receiver_0_0 = addTo(new SolidRect_init(size, size, color.Colors.WHITE), $receiver_0);
          position_0($receiver_0_0, i * (size + padding), j * (size + padding));
          var text = cell.index.toString();
          var textSize = coerceAtMost(size / 2, 16.0);
          var color_0 = color.Colors.BLACK;
          var font;
          font = Fonts.Companion.defaultFont;
          var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$(text, textSize, color_0, font), $receiver_0_0);
          position($receiver_0_1, 5, 5);
          init(cell, $receiver_0_0, board, size * 1.1);
        }}
    }
    init_0(board, $receiver_0, size * 1.1);
    return $receiver_0;
  }
  function configuration$lambda($receiver) {
    return Unit;
  }
  function Coroutine$configuration$lambda$lambda$lambda(closure$newVal_0, closure$range_0, closure$countSignal_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$newVal = closure$newVal_0;
    this.local$closure$range = closure$range_0;
    this.local$closure$countSignal = closure$countSignal_0;
  }
  Coroutine$configuration$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$configuration$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$configuration$lambda$lambda$lambda.prototype.constructor = Coroutine$configuration$lambda$lambda$lambda;
  Coroutine$configuration$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$newVal.v = coerceIn(this.local$closure$newVal.v - 1 | 0, this.local$closure$range);
            this.state_0 = 2;
            this.result_0 = this.local$closure$countSignal.invoke_11rb$(this.local$closure$newVal.v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function configuration$lambda$lambda$lambda(closure$newVal_0, closure$range_0, closure$countSignal_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$configuration$lambda$lambda$lambda(closure$newVal_0, closure$range_0, closure$countSignal_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$configuration$lambda$lambda$lambda_0(closure$format_0, closure$newVal_0, this$_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$format = closure$format_0;
    this.local$closure$newVal = closure$newVal_0;
    this.local$this$ = this$_0;
  }
  Coroutine$configuration$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$configuration$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$configuration$lambda$lambda$lambda_0.prototype.constructor = Coroutine$configuration$lambda$lambda$lambda_0;
  Coroutine$configuration$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$.text = this.local$closure$format(this.local$closure$newVal.v), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function configuration$lambda$lambda$lambda_0(closure$format_0, closure$newVal_0, this$_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$configuration$lambda$lambda$lambda_0(closure$format_0, closure$newVal_0, this$_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$configuration$lambda$lambda$lambda_1(closure$newVal_0, closure$range_0, closure$countSignal_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$newVal = closure$newVal_0;
    this.local$closure$range = closure$range_0;
    this.local$closure$countSignal = closure$countSignal_0;
  }
  Coroutine$configuration$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$configuration$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$configuration$lambda$lambda$lambda_1.prototype.constructor = Coroutine$configuration$lambda$lambda$lambda_1;
  Coroutine$configuration$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$newVal.v = coerceIn(this.local$closure$newVal.v + 1 | 0, this.local$closure$range);
            this.state_0 = 2;
            this.result_0 = this.local$closure$countSignal.invoke_11rb$(this.local$closure$newVal.v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function configuration$lambda$lambda$lambda_1(closure$newVal_0, closure$range_0, closure$countSignal_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$configuration$lambda$lambda$lambda_1(closure$newVal_0, closure$range_0, closure$countSignal_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function configuration($receiver, label, initial, format, range, ntfy, callback) {
    if (callback === void 0)
      callback = configuration$lambda;
    var $receiver_0_0 = addTo(new Container_init(), $receiver);
    var newVal = {v: initial};
    var countSignal = new AsyncSignal();
    countSignal.add_25kf2w$(ntfy);
    var color_0_0;
    var font;
    color_0_0 = color_0.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$(label, 16.0, color_0_0, font), $receiver_0_0);
    text$lambda($receiver_0_1);
    var countLabel = $receiver_0_1;
    var color_0_1;
    var font_0;
    color_0_1 = color_0.Colors.WHITE;
    font_0 = Fonts.Companion.defaultFont;
    var $receiver_0_2 = addTo(Text.Companion.invoke_8ii8iq$('-', 16.0, color_0_1, font_0), $receiver_0_0);
    alignLeftToRightOf($receiver_0_2, countLabel, 20.0);
    var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$;
    if ((tmp$ = $receiver_0_2 != null ? get_mouse($receiver_0_2) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda_0(tmp$, configuration$lambda$lambda$lambda(newVal, range, countSignal)));
    }var countMinus = $receiver_0_2;
    var text = format(newVal.v);
    var color_0_2;
    var font_1;
    color_0_2 = color_0.Colors.WHITE;
    font_1 = Fonts.Companion.defaultFont;
    var $receiver_0_3 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_2, font_1), $receiver_0_0);
    alignLeftToRightOf($receiver_0_3, countMinus, 20.0);
    countSignal.invoke_25kf2w$(configuration$lambda$lambda$lambda_0(format, newVal, $receiver_0_3));
    var countText = $receiver_0_3;
    var color_0_3;
    var font_2;
    color_0_3 = color_0.Colors.WHITE;
    font_2 = Fonts.Companion.defaultFont;
    var $receiver_0_4 = addTo(Text.Companion.invoke_8ii8iq$('+', 16.0, color_0_3, font_2), $receiver_0_0);
    alignLeftToRightOf($receiver_0_4, countText, 20.0);
    var prop_0 = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$_0;
    if ((tmp$_0 = $receiver_0_4 != null ? get_mouse($receiver_0_4) : null) != null) {
      prop_0.get(tmp$_0).add_qlkmfe$(doMouseEvent$lambda$lambda_0(tmp$_0, configuration$lambda$lambda$lambda_1(newVal, range, countSignal)));
    }callback($receiver_0_0);
    return $receiver_0_0;
  }
  function clone($receiver) {
    return PointInt.Companion.invoke_vux9f0$($receiver.x, $receiver.y);
  }
  function plus($receiver, diff) {
    return PointInt.Companion.invoke_vux9f0$($receiver.x + diff.first | 0, $receiver.y + diff.second | 0);
  }
  function countTo($receiver, to) {
    var tmp$;
    if ($receiver < to) {
      tmp$ = new IntRange($receiver, to);
    } else {
      tmp$ = downTo($receiver, to);
    }
    return tmp$;
  }
  function get_isVertical($receiver) {
    return $receiver === Direction$UP_getInstance() || $receiver === Direction$DOWN_getInstance();
  }
  Object.defineProperty(Direction, 'UP', {
    get: Direction$UP_getInstance
  });
  Object.defineProperty(Direction, 'DOWN', {
    get: Direction$DOWN_getInstance
  });
  Object.defineProperty(Direction, 'LEFT', {
    get: Direction$LEFT_getInstance
  });
  Object.defineProperty(Direction, 'RIGHT', {
    get: Direction$RIGHT_getInstance
  });
  _.Direction = Direction;
  Board.Cell = Board$Cell;
  Object.defineProperty(Board, 'EmptyCell', {
    get: Board$EmptyCell_getInstance
  });
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  Board.FragmentCell = Board$FragmentCell;
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  _.Board = Board;
  _.get_view_4qjzxn$ = get_view;
  _.set_view_z21h04$ = set_view;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  _.init_1bttfb$ = init;
  _.init_xu6jin$ = init_0;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  _.move_d6vitg$ = move;
  _.get_direction_izn8r9$ = get_direction;
  _.main = main;
  _.createBoard_jm6i93$ = createBoard;
  _.configuration_yrwhay$ = configuration;
  _.clone_9ozadc$ = clone;
  _.plus_2dhgkl$ = plus;
  _.countTo_dqglrj$ = countTo;
  _.get_isVertical_ycmc7k$ = get_isVertical;
  view = new Extra$Property(void 0, view$lambda);
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('Games-SlidingGame', _);
  return _;
}));

//# sourceMappingURL=Games-SlidingGame.js.map
