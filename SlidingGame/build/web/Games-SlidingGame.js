(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korma-root-korma', 'kds-root-kds', 'korio-root-korio', 'korge-root-korge', 'klock-root-klock', 'korim-root-korim', 'kotlinx-coroutines-core', 'kmem-root-kmem'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korma-root-korma'), require('kds-root-kds'), require('korio-root-korio'), require('korge-root-korge'), require('klock-root-klock'), require('korim-root-korim'), require('kotlinx-coroutines-core'), require('kmem-root-kmem'));
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
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Games-SlidingGame'.");
    }if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'Games-SlidingGame'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'Games-SlidingGame'.");
    }root['Games-SlidingGame'] = factory(typeof this['Games-SlidingGame'] === 'undefined' ? {} : this['Games-SlidingGame'], kotlin, this['korma-root-korma'], this['kds-root-kds'], this['korio-root-korio'], this['korge-root-korge'], this['klock-root-klock'], this['korim-root-korim'], this['kotlinx-coroutines-core'], this['kmem-root-kmem']);
  }
}(this, function (_, Kotlin, $module$korma_root_korma, $module$kds_root_kds, $module$korio_root_korio, $module$korge_root_korge, $module$klock_root_klock, $module$korim_root_korim, $module$kotlinx_coroutines_core, $module$kmem_root_kmem) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Pair = Kotlin.kotlin.Pair;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var PointInt = $module$korma_root_korma.com.soywiz.korma.geom.PointInt;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
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
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Easing = $module$korma_root_korma.com.soywiz.korma.interpolation.Easing;
  var tween = $module$korge_root_korge.com.soywiz.korge.tween.tween_t8t7it$;
  var Any = Object;
  var setExtra = $module$kds_root_kds.com.soywiz.kds.setExtra_46skc7$;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var get_keys = $module$korge_root_korge.com.soywiz.korge.input.get_keys_gohfi1$;
  var _interpolate = $module$korge_root_korge.com.soywiz.korge.tween._interpolate_yvo9jy$;
  var getCallableRef = Kotlin.getCallableRef;
  var V2_init = $module$korge_root_korge.com.soywiz.korge.tween.V2;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var AsyncSignal = $module$korio_root_korio.com.soywiz.korio.async.AsyncSignal;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var consumeAsFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.consumeAsFlow_6u4434$;
  var buffer = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.buffer_9ty2u6$;
  var launch = $module$korio_root_korio.com.soywiz.korio.async.launch_hilpzi$;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var alignLeftToRightOf = $module$korge_root_korge.com.soywiz.korge.view.alignLeftToRightOf_qcv975$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var alignTopToBottomOf = $module$korge_root_korge.com.soywiz.korge.view.alignTopToBottomOf_qcv975$;
  var alignTopToTopOf = $module$korge_root_korge.com.soywiz.korge.view.alignTopToTopOf_qcv975$;
  var position_0 = $module$korge_root_korge.com.soywiz.korge.view.position_2cbtc5$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_38ydlf$;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nayhkp$;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
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
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var AssertionError_init = Kotlin.kotlin.AssertionError_init_pdl1vj$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var minus = $module$korma_root_korma.com.soywiz.korma.geom.minus_vszzvl$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var AssertionError_init_0 = Kotlin.kotlin.AssertionError_init_s8jyv4$;
  var get_isOdd = $module$kmem_root_kmem.com.soywiz.kmem.get_isOdd_s8ev3n$;
  var get_isEven = $module$kmem_root_kmem.com.soywiz.kmem.get_isEven_s8ev3n$;
  var TGenQueue = $module$kds_root_kds.com.soywiz.kds.TGenQueue;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var checkCountOverflow = Kotlin.kotlin.collections.checkCountOverflow_za3lpa$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
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
    Direction$Companion_getInstance();
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
  function Direction$Companion() {
    Direction$Companion_instance = this;
  }
  Object.defineProperty(Direction$Companion.prototype, 'directions', {
    get: function () {
      return listOf([Direction$UP_getInstance(), Direction$DOWN_getInstance(), Direction$LEFT_getInstance(), Direction$RIGHT_getInstance()]);
    }
  });
  Direction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Direction$Companion_instance = null;
  function Direction$Companion_getInstance() {
    Direction_initFields();
    if (Direction$Companion_instance === null) {
      new Direction$Companion();
    }return Direction$Companion_instance;
  }
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
  function Board(width, height, from) {
    Board$Companion_getInstance();
    if (width === void 0)
      width = 4;
    if (height === void 0)
      height = 4;
    if (from === void 0)
      from = null;
    this.width = width;
    this.height = height;
    this.board = null;
    this.gameOverSignal_0 = new Signal();
    this.moveSignal_0 = new Signal();
    var tmp$;
    if (from != null)
      tmp$ = from;
    else {
      var size = Kotlin.imul(this.width, this.height);
      var list = ArrayList_init(size);
      for (var index = 0; index < size; index++) {
        list.add_11rb$(index);
      }
      tmp$ = shuffled(list);
    }
    var arr = tmp$;
    var width_0 = this.width;
    var height_0 = this.height;
    var tmp$_0;
    var array = Array_0(Kotlin.imul(width_0, height_0));
    var tmp$_0_0;
    tmp$_0_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0_0; i++) {
      var gen$result;
      var index_0 = arr.get_za3lpa$(i);
      if ((index_0 + 1 | 0) < Kotlin.imul(this.width, this.height)) {
        gen$result = new Board$FragmentCell(this, i % this.width, i / this.width | 0, index_0 + 1 | 0);
      } else {
        gen$result = Board$EmptyCell_getInstance();
      }
      array[i] = gen$result;
    }
    this.board = new Array2(width_0, height_0, Kotlin.isArray(tmp$_0 = array) ? tmp$_0 : throwCCE());
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
  function Board$Companion() {
    Board$Companion_instance = this;
  }
  Board$Companion.prototype.generateSolvable_vux9f0$ = function (width, height) {
    var b;
    var solvable;
    do {
      b = new Board(width, height);
      solvable = get_isSolvable(b);
      if (!solvable)
        println('Board is not solvable, regenerating.');
    }
     while (!solvable);
    return b;
  };
  Board$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Board$Companion_instance = null;
  function Board$Companion_getInstance() {
    if (Board$Companion_instance === null) {
      new Board$Companion();
    }return Board$Companion_instance;
  }
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
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda(closure$handler, it));
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
  function space$lambda() {
    return 0.0;
  }
  var space;
  var space_metadata = new PropertyMetadata('space');
  function get_space($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = space.name) != null ? tmp$ : space_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = space.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = space.name) != null ? tmp$_3 : space_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_space($receiver, space_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = space.name) != null ? tmp$ : space_metadata.callableName, (tmp$_0 = space_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function Coroutine$init$lambda(closure$parent_0, this$init_0, closure$channel_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$parent = closure$parent_0;
    this.local$this$init = this$init_0;
    this.local$closure$channel = closure$channel_0;
    this.local$tmp$ = void 0;
    this.local$emptyPos = void 0;
    this.local$pos = void 0;
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
            this.local$tmp$ = getRelativePosition(this.local$pos, this.local$emptyPos);
            if (this.local$tmp$ == null) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var dir = this.local$tmp$;
            if (get_isVertical(dir)) {
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

            var $receiver_1 = drop(tmp$, 1);
            var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
            var tmp$_2;
            tmp$_2 = $receiver_1.iterator();
            while (tmp$_2.hasNext()) {
              var item_1 = tmp$_2.next();
              destination_1.add_11rb$(new Pair(item_1, dir));
            }

            var cellsToMove = destination_1;
            this.state_0 = 3;
            this.result_0 = this.local$closure$channel.send_11rb$(cellsToMove, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function init$lambda(closure$parent_0, this$init_0, closure$channel_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda(closure$parent_0, this$init_0, closure$channel_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function init($receiver, view, parent, space, channel) {
    set_view($receiver, view);
    set_space($receiver, space);
    var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$;
    if ((tmp$ = view != null ? get_mouse(view) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, init$lambda(parent, $receiver, channel)));
    }}
  function Coroutine$init$lambda_0(this$init_0, closure$channel_0, event_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$init = this$init_0;
    this.local$closure$channel = closure$channel_0;
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
              var closure$channel = this.local$closure$channel;
              var cellPos = plus(this$init.emptyPos, tmp$.diff);
              if (this$init.board.inside_vux9f0$(cellPos.x, cellPos.y) && Kotlin.isType(this$init.get_mlm8fl$(cellPos), Board$FragmentCell)) {
                var cellsToMove = listOf_0(new Pair(cellPos, tmp$.inv()));
                this.state_0 = 2;
                this.result_0 = closure$channel.send_11rb$(cellsToMove, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 3;
                continue;
              }
            } else {
              this.local$tmp$ = null;
              this.state_0 = 4;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.local$tmp$ = Unit;
            this.state_0 = 4;
            continue;
          case 4:
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
  function init$lambda_0(this$init_0, closure$channel_0) {
    return function (event_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda_0(this$init_0, closure$channel_0, event_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function init_0($receiver_0, view, channel) {
    var prop = getPropertyCallableRef('onKeyUp', 1, function ($receiver) {
      return $receiver.onKeyUp;
    });
    var tmp$;
    if ((tmp$ = view != null ? get_keys(view) : null) != null) {
      prop.get(tmp$).add_25kf2w$(init$lambda_0($receiver_0, channel));
    }}
  function Coroutine$move($receiver_0, direction_0, space_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$direction = direction_0;
    this.local$space = space_0;
  }
  Coroutine$move.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$move.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$move.prototype.constructor = Coroutine$move;
  Coroutine$move.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            if (this.local$$receiver.move_h80bq7$(this.local$direction)) {
              this.local$tmp$ = get_view(this.local$$receiver);
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
            }.bind(null, view)), view.x, view.x + this.local$space * this.local$direction.diff.first, getCallableRef('_interpolate', function (ratio, l, r) {
              return _interpolate(ratio, l, r);
            }), true);
            tmp$_0 = new V2_init(getPropertyCallableRef('y', 0, function ($receiver) {
              return $receiver.y;
            }.bind(null, view), function ($receiver, value) {
              $receiver.y = value;
            }.bind(null, view)), view.y, view.y + this.local$space * this.local$direction.diff.second, getCallableRef('_interpolate', function (ratio, l, r) {
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
            this.state_0 = 4;
            continue;
          case 4:
            return;
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
  function move($receiver_0, direction_0, space_0, continuation_0, suspended) {
    var instance = new Coroutine$move($receiver_0, direction_0, space_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  function collect$ObjectLiteral(closure$action) {
    this.closure$action = closure$action;
  }
  collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
    return this.closure$action(value, continuation);
  };
  collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
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
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda_0(closure$handler, it));
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
  function Coroutine$main$lambda$lambda$lambda(closure$board_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$board = closure$board_0;
    this.local$tmp$ = void 0;
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
            this.local$tmp$ = this.local$it.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }
            var element = this.local$tmp$.next();
            var tmp$;
            var cell = (tmp$ = this.local$closure$board.v) != null ? tmp$.get_mlm8fl$(element.first) : null;
            if (Kotlin.isType(cell, Board$FragmentCell)) {
              this.state_0 = 3;
              this.result_0 = move(cell, element.second, get_space(cell), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 2;
            continue;
          case 5:
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
  function main$lambda$lambda$lambda(closure$board_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda(closure$board_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda(closure$channel_0, closure$board_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$board = closure$board_0;
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
            var $receiver = buffer(consumeAsFlow(this.local$closure$channel));
            var action = main$lambda$lambda$lambda(this.local$closure$board);
            this.state_0 = 2;
            this.result_0 = $receiver.collect_42ocv1$(new collect$ObjectLiteral(action), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function main$lambda$lambda(closure$channel_0, closure$board_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$channel_0, closure$board_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
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
  function main$lambda$lambda$lambda_0(it) {
    return it.toString();
  }
  function Coroutine$main$lambda$lambda$lambda_0(closure$boardWidth_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardWidth = closure$boardWidth_0;
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
  function main$lambda$lambda$lambda_1(closure$boardWidth_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda_0(closure$boardWidth_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda_2(closure$newGameButton) {
    return function ($receiver) {
      alignTopToBottomOf($receiver, closure$newGameButton, 20.0);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_3(it) {
    return it.toString();
  }
  function Coroutine$main$lambda$lambda$lambda_1(closure$boardHeight_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardHeight = closure$boardHeight_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda_1.prototype.constructor = Coroutine$main$lambda$lambda$lambda_1;
  Coroutine$main$lambda$lambda$lambda_1.prototype.doResume = function () {
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
  function main$lambda$lambda$lambda_4(closure$boardHeight_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda_1(closure$boardHeight_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda_5(closure$widthConf) {
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
  function Coroutine$main$lambda$lambda_0(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$channel_0, closure$buttonContainer_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardContainer = closure$boardContainer_0;
    this.local$this$ = this$_0;
    this.local$closure$gameOverText = closure$gameOverText_0;
    this.local$closure$gameOverCloseable = closure$gameOverCloseable_0;
    this.local$closure$board = closure$board_0;
    this.local$closure$boardWidth = closure$boardWidth_0;
    this.local$closure$boardHeight = closure$boardHeight_0;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$buttonContainer = closure$buttonContainer_0;
  }
  Coroutine$main$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda_0;
  Coroutine$main$lambda$lambda_0.prototype.doResume = function () {
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
            var $receiver = Board$Companion_getInstance().generateSolvable_vux9f0$(this.local$closure$boardWidth.v, this.local$closure$boardHeight.v);
            var this$ = this.local$this$;
            var closure$boardWidth = this.local$closure$boardWidth;
            var closure$boardHeight = this.local$closure$boardHeight;
            var closure$channel = this.local$closure$channel;
            var closure$boardContainer = this.local$closure$boardContainer;
            var closure$buttonContainer = this.local$closure$buttonContainer;
            var closure$gameOverText = this.local$closure$gameOverText;
            var closure$gameOverCloseable = this.local$closure$gameOverCloseable;
            var tmp$_2;
            position(this$, 100, 100);
            var a = this$.views.virtualWidth / (closure$boardWidth.v * 1.1) * 4 / 5;
            var b = this$.views.virtualHeight / (closure$boardHeight.v * 1.1) / 2;
            var blockSize = Math_0.min(a, b);
            closure$boardContainer.v = createBoard(this$, $receiver, blockSize, closure$channel);
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
  function main$lambda$lambda_0(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$channel_0, closure$buttonContainer_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda_0(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$channel_0, closure$buttonContainer_0, it_0, continuation_0);
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
            var channel = Channel();
            launch(this.local$$receiver, main$lambda$lambda(channel, board));
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
            var widthConf = configuration($receiver_0_0, 'Width:', boardWidth.v, main$lambda$lambda$lambda_0, new IntRange(0, 2147483647), main$lambda$lambda$lambda_1(boardWidth), main$lambda$lambda$lambda_2(newGameButton));
            configuration($receiver_0_0, 'Height:', boardHeight.v, main$lambda$lambda$lambda_3, new IntRange(0, 2147483647), main$lambda$lambda$lambda_4(boardHeight), main$lambda$lambda$lambda_5(widthConf));
            var buttonContainer = $receiver_0_0;
            newGame.invoke_25kf2w$(main$lambda$lambda_0(boardContainer, this.local$$receiver, gameOverText, gameOverCloseable, board, boardWidth, boardHeight, channel, buttonContainer));
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
  function createBoard($receiver, board, blockSize, channel) {
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
          init(cell, $receiver_0_0, board, size * 1.1, channel);
        }}
    }
    init_0(board, $receiver_0, channel);
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
  function Solver() {
    Solver_instance = this;
    this.EMPTY_CELL_INDEX_0 = -1;
  }
  Solver.prototype.solve_b0tygf$ = function (board, channel) {
  };
  Solver.prototype.solveRow_r04rj8$ = function (row, board) {
  };
  function Solver$createPath$lambda(it) {
    return it.lock;
  }
  function Coroutine$Solver$createPath$lambda(closure$pathPairs_0, closure$emptyPos_0, closure$board_0, this$Solver_0, closure$cellPos_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$pathPairs = closure$pathPairs_0;
    this.local$closure$emptyPos = closure$emptyPos_0;
    this.local$closure$board = closure$board_0;
    this.local$this$Solver = this$Solver_0;
    this.local$closure$cellPos = closure$cellPos_0;
    this.local$tmp$ = void 0;
    this.local$element = void 0;
    this.local$closure$emptyPos_0 = void 0;
    this.local$closure$cellPos_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Solver$createPath$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Solver$createPath$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Solver$createPath$lambda.prototype.constructor = Coroutine$Solver$createPath$lambda;
  Coroutine$Solver$createPath$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$pathPairs.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }
            this.local$element = this.local$tmp$.next();
            this.local$closure$emptyPos_0 = this.local$closure$emptyPos;
            var closure$board = this.local$closure$board;
            var this$Solver = this.local$this$Solver;
            this.local$closure$cellPos_0 = this.local$closure$cellPos;
            var emptyPath = this$Solver.getEmptyPath_0(this.local$closure$emptyPos_0.v, this.local$element.first.pos, closure$board);
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yieldAll_p1ys8y$(emptyPath, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.yield_11rb$(new Pair(this.local$closure$cellPos_0.v, ensureNotNull(getRelativePosition(this.local$closure$cellPos_0.v, this.local$element.second.pos))), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$closure$emptyPos_0.v = this.local$closure$cellPos_0.v;
            this.local$closure$cellPos_0.v = this.local$element.second.pos;
            this.state_0 = 2;
            continue;
          case 5:
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
  function Solver$createPath$lambda_0(closure$pathPairs_0, closure$emptyPos_0, closure$board_0, this$Solver_0, closure$cellPos_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Solver$createPath$lambda(closure$pathPairs_0, closure$emptyPos_0, closure$board_0, this$Solver_0, closure$cellPos_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Solver.prototype.createPath_girn7e$ = function (start, end, board) {
    var tmp$, tmp$_0;
    assert(board.get_vux9f0$(start.x, start.y).index !== -1);
    var path = getPath(board, start, end, Solver$createPath$lambda);
    var pathPairs = zip(dropLast(path, 1), drop(path, 1));
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = board.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (element.index === -1) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    tmp$_0 = (tmp$ = firstOrNull$result) != null ? tmp$.pos : null;
    if (tmp$_0 == null) {
      throw AssertionError_init('No empty cell');
    }var emptyPos = {v: tmp$_0};
    var cellPos = {v: start};
    return toList(sequence(Solver$createPath$lambda_0(pathPairs, emptyPos, board, this, cellPos)));
  };
  function Solver$getEmptyPath$lambda(it) {
    return it.lock;
  }
  function Coroutine$Solver$getEmptyPath$lambda(closure$path_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$path = closure$path_0;
    this.local$iterator = void 0;
    this.local$cell = void 0;
    this.local$next = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Solver$getEmptyPath$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Solver$getEmptyPath$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Solver$getEmptyPath$lambda.prototype.constructor = Coroutine$Solver$getEmptyPath$lambda;
  Coroutine$Solver$getEmptyPath$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$iterator = this.local$closure$path.iterator();
            if (!this.local$iterator.hasNext())
              throw AssertionError_init('Bad path');
            this.local$cell = this.local$iterator.next().pos;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$iterator.hasNext()) {
              this.state_0 = 4;
              continue;
            }
            this.local$next = this.local$iterator.next().pos;
            tmp$ = getRelativePosition(this.local$next, this.local$cell);
            if (tmp$ == null) {
              throw AssertionError_init('Bad path');
            }
            var dir = tmp$;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(new Pair(this.local$next, dir), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$cell = this.local$next;
            this.state_0 = 2;
            continue;
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
  function Solver$getEmptyPath$lambda_0(closure$path_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Solver$getEmptyPath$lambda(closure$path_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Solver.prototype.getEmptyPath_0 = function (start, end, board) {
    var path = getPath(board, start, end, Solver$getEmptyPath$lambda);
    return toList(sequence(Solver$getEmptyPath$lambda_0(path)));
  };
  function Solver$Cell(pos, index, lock) {
    if (lock === void 0)
      lock = false;
    this.pos = pos;
    this.index = index;
    this.lock = lock;
  }
  Solver$Cell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cell',
    interfaces: []
  };
  Solver$Cell.prototype.component1 = function () {
    return this.pos;
  };
  Solver$Cell.prototype.component2 = function () {
    return this.index;
  };
  Solver$Cell.prototype.component3 = function () {
    return this.lock;
  };
  Solver$Cell.prototype.copy_hfjfns$ = function (pos, index, lock) {
    return new Solver$Cell(pos === void 0 ? this.pos : pos, index === void 0 ? this.index : index, lock === void 0 ? this.lock : lock);
  };
  Solver$Cell.prototype.toString = function () {
    return 'Cell(pos=' + Kotlin.toString(this.pos) + (', index=' + Kotlin.toString(this.index)) + (', lock=' + Kotlin.toString(this.lock)) + ')';
  };
  Solver$Cell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.lock) | 0;
    return result;
  };
  Solver$Cell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.index, other.index) && Kotlin.equals(this.lock, other.lock)))));
  };
  Solver.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Solver',
    interfaces: []
  };
  var Solver_instance = null;
  function Solver_getInstance() {
    if (Solver_instance === null) {
      new Solver();
    }return Solver_instance;
  }
  var map = defineInlineFunction('Games-SlidingGame.map_a5qy59$', wrapFunction(function () {
    var Array2 = _.$$importsForInline$$['kds-root-kds'].com.soywiz.kds.Array2;
    var throwCCE = Kotlin.throwCCE;
    var Array_0 = Array;
    return function ($receiver, transform) {
      var width = $receiver.width;
      var height = $receiver.height;
      var tmp$;
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        array[i] = transform($receiver.get_vux9f0$(i % $receiver.width, i / $receiver.width | 0));
      }
      return new Array2(width, height, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
    };
  }));
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
  function getRelativePosition($receiver, to) {
    var tmp$;
    if ($receiver != null ? $receiver.equals(to) : null)
      tmp$ = null;
    else if ($receiver.y === to.y)
      tmp$ = $receiver.x < to.x ? Direction$RIGHT_getInstance() : Direction$LEFT_getInstance();
    else if ($receiver.x === to.x)
      tmp$ = $receiver.y < to.y ? Direction$DOWN_getInstance() : Direction$UP_getInstance();
    else
      tmp$ = null;
    return tmp$;
  }
  function isAdjacent($receiver, to) {
    var diff = minus(to, $receiver);
    return abs(diff.x - diff.y | 0) === 1;
  }
  function assert(cond, message) {
    if (message === void 0)
      message = null;
    if (!cond)
      throw AssertionError_init_0(message);
  }
  function get_isVertical($receiver) {
    return $receiver === Direction$UP_getInstance() || $receiver === Direction$DOWN_getInstance();
  }
  function get_isSolvable($receiver) {
    var $receiver_0 = $receiver.board.data;
    var destination = ArrayList_init_0();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      if (Kotlin.isType(element, Board$FragmentCell))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(item.index);
    }
    var data = destination_0;
    var tmp$_1, tmp$_0_0;
    var index = 0;
    var accumulator = 0;
    tmp$_1 = data.iterator();
    loop_label: while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
      var acc = accumulator;
      var $receiver_1 = data.subList_vux9f0$(index_0 + 1 | 0, data.size);
      var count$result;
      count$break: do {
        var tmp$_2;
        if (Kotlin.isType($receiver_1, Collection) && $receiver_1.isEmpty()) {
          count$result = 0;
          break count$break;
        }var count = 0;
        tmp$_2 = $receiver_1.iterator();
        while (tmp$_2.hasNext()) {
          var element_1 = tmp$_2.next();
          if (element_0 > element_1)
            checkCountOverflow((count = count + 1 | 0, count));
        }
        count$result = count;
      }
       while (false);
      accumulator = acc + count$result | 0;
    }
    var inversions = accumulator;
    return get_isOdd($receiver.width) && get_isEven(inversions) || get_isOdd($receiver.height - $receiver.emptyPos.y | 0) ^ get_isOdd(inversions);
  }
  function PathCell(item, mark, lastPos) {
    if (mark === void 0)
      mark = false;
    if (lastPos === void 0)
      lastPos = null;
    this.item = item;
    this.mark = mark;
    this.lastPos = lastPos;
  }
  PathCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathCell',
    interfaces: []
  };
  PathCell.prototype.component1 = function () {
    return this.item;
  };
  PathCell.prototype.component2 = function () {
    return this.mark;
  };
  PathCell.prototype.component3 = function () {
    return this.lastPos;
  };
  PathCell.prototype.copy_bq51jw$ = function (item, mark, lastPos) {
    return new PathCell(item === void 0 ? this.item : item, mark === void 0 ? this.mark : mark, lastPos === void 0 ? this.lastPos : lastPos);
  };
  PathCell.prototype.toString = function () {
    return 'PathCell(item=' + Kotlin.toString(this.item) + (', mark=' + Kotlin.toString(this.mark)) + (', lastPos=' + Kotlin.toString(this.lastPos)) + ')';
  };
  PathCell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.item) | 0;
    result = result * 31 + Kotlin.hashCode(this.mark) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastPos) | 0;
    return result;
  };
  PathCell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.item, other.item) && Kotlin.equals(this.mark, other.mark) && Kotlin.equals(this.lastPos, other.lastPos)))));
  };
  function Coroutine$getPath$lambda(closure$end_0, closure$start_0, closure$board_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$end = closure$end_0;
    this.local$closure$start = closure$start_0;
    this.local$closure$board = closure$board_0;
    this.local$next = void 0;
    this.local$nextCell = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$getPath$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getPath$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getPath$lambda.prototype.constructor = Coroutine$getPath$lambda;
  Coroutine$getPath$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$next = this.local$closure$end;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$next != null ? this.local$next.equals(this.local$closure$start) : null) {
              this.state_0 = 4;
              continue;
            }
            var p = this.local$next;
            this.local$nextCell = this.local$closure$board.get_vux9f0$(p.x, p.y);
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$nextCell.item, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$ = this.local$nextCell.lastPos;
            if (tmp$ == null) {
              throw AssertionError_init('Path is not complete');
            }
            var lastPos = tmp$;
            this.local$next = lastPos;
            this.state_0 = 2;
            continue;
          case 4:
            var $receiver = this.local$closure$board;
            var p_0 = this.local$closure$start;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver.yield_11rb$($receiver.get_vux9f0$(p_0.x, p_0.y).item, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
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
  function getPath$lambda(closure$end_0, closure$start_0, closure$board_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$getPath$lambda(closure$end_0, closure$start_0, closure$board_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function getPath($receiver, start, end, ignorePredicate) {
    if (ignorePredicate === void 0)
      ignorePredicate = null;
    var tmp$;
    var width = $receiver.width;
    var height = $receiver.height;
    var tmp$_0;
    var array = Array_0(Kotlin.imul(width, height));
    var tmp$_0_0;
    tmp$_0_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0_0; i++) {
      array[i] = new PathCell($receiver.get_vux9f0$(i % $receiver.width, i / $receiver.width | 0));
    }
    var board = new Array2(width, height, Kotlin.isArray(tmp$_0 = array) ? tmp$_0 : throwCCE());
    board.get_vux9f0$(start.x, start.y).mark = true;
    var queue = new TGenQueue();
    queue.enqueue_11rb$(start);
    var pathFound = false;
    while (!queue.isEmpty() && !pathFound) {
      var startPos = queue.dequeue();
      tmp$ = Direction$Companion_getInstance().directions.iterator();
      while (tmp$.hasNext()) {
        var dir = tmp$.next();
        var nextPos = plus(startPos, dir.diff);
        if (!board.inside_vux9f0$(nextPos.x, nextPos.y)) {
          continue;
        }var next = board.get_vux9f0$(nextPos.x, nextPos.y);
        if (!next.mark && (ignorePredicate != null ? ignorePredicate(next.item) : null) !== true) {
          next.lastPos = startPos;
          next.mark = true;
          queue.enqueue_11rb$(nextPos);
          if (nextPos != null ? nextPos.equals(end) : null) {
            pathFound = true;
            break;
          }}}
    }
    assert(pathFound, 'No path found from ' + start + ' to ' + end);
    return reversed(toList(sequence(getPath$lambda(end, start, board))));
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
  Object.defineProperty(Direction, 'Companion', {
    get: Direction$Companion_getInstance
  });
  _.Direction = Direction;
  Board.Cell = Board$Cell;
  Object.defineProperty(Board, 'EmptyCell', {
    get: Board$EmptyCell_getInstance
  });
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  Board.FragmentCell = Board$FragmentCell;
  Object.defineProperty(Board, 'Companion', {
    get: Board$Companion_getInstance
  });
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  _.Board = Board;
  _.get_view_4qjzxn$ = get_view;
  _.set_view_z21h04$ = set_view;
  _.get_space_4qjzxn$ = get_space;
  _.set_space_nk8ddj$ = set_space;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  _.init_tq2ps$ = init;
  _.init_o2jp3s$ = init_0;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  _.move_d6vitg$ = move;
  _.get_direction_izn8r9$ = get_direction;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  _.main = main;
  _.createBoard_c0f1pe$ = createBoard;
  _.configuration_yrwhay$ = configuration;
  Solver.prototype.Cell = Solver$Cell;
  Object.defineProperty(_, 'Solver', {
    get: Solver_getInstance
  });
  $$importsForInline$$['Games-SlidingGame'] = _;
  _.map_a5qy59$ = map;
  _.clone_9ozadc$ = clone;
  _.plus_2dhgkl$ = plus;
  _.countTo_dqglrj$ = countTo;
  _.getRelativePosition_ixjqi9$ = getRelativePosition;
  _.isAdjacent_ixjqi9$ = isAdjacent;
  _.assert_qlx5jl$ = assert;
  _.get_isVertical_ycmc7k$ = get_isVertical;
  _.get_isSolvable_wzskkp$ = get_isSolvable;
  _.PathCell = PathCell;
  _.getPath_ybjl68$ = getPath;
  view = new Extra$Property(void 0, view$lambda);
  space = new Extra$Property(void 0, space$lambda);
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('Games-SlidingGame', _);
  return _;
}));

//# sourceMappingURL=Games-SlidingGame.js.map
