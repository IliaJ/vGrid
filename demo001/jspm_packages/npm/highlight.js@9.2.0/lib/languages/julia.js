/* */ 
(function(Buffer) {
  module.exports = function(hljs) {
    var KEYWORDS = {
      keyword: 'in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export ' + 'finally for function global if immutable import importall let local macro module quote return try type ' + 'typealias using while',
      literal: 'true false ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 ' + 'InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort ' + 'RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown ' + 'RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e|0 eu|0 ' + 'eulergamma golden im nothing pi γ π φ ' + 'Inf64 NaN64 RoundNearestTiesAway RoundNearestTiesUp ',
      built_in: 'ANY ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe ' + 'Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char ' + 'CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 ' + 'Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType ' + 'DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError ' + 'EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 ' + 'Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 ' + 'InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError ' + 'LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister ' + 'Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange ' + 'OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 ' + 'Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set ' + 'SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString ' + 'SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular ' + 'Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket ' + 'Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange ' + 'Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip ' + 'AbstractChannel AbstractFloat AbstractString AssertionError Base64DecodePipe Base64EncodePipe BufferStream ' + 'CapturedException CartesianIndex CartesianRange Channel Cintmax_t CompositeException Cstring Cuintmax_t ' + 'Cwstring Date DateTime Dims Enum GenSym GlobalRef HTML InitError InvalidStateException Irrational LinSpace ' + 'LowerTriangular NullException Nullable OutOfMemoryError Pair PartialQuickSort Pipe RandomDevice ' + 'ReadOnlyMemoryError ReentrantLock Ref RemoteException SegmentationFault SerializationState SimpleVector ' + 'TCPSocket Text Tuple UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UnicodeError Union UpperTriangular ' + 'Val Void WorkerConfig AbstractMatrix AbstractSparseMatrix AbstractSparseVector AbstractVecOrMat AbstractVector ' + 'DenseMatrix DenseVecOrMat DenseVector Matrix SharedMatrix SharedVector StridedArray StridedMatrix ' + 'StridedVecOrMat StridedVector VecOrMat Vector '
    };
    var VARIABLE_NAME_RE = '[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*';
    var DEFAULT = {
      lexemes: VARIABLE_NAME_RE,
      keywords: KEYWORDS,
      illegal: /<\//
    };
    var TYPE_ANNOTATION = {
      className: 'type',
      begin: /::/
    };
    var SUBTYPE = {
      className: 'type',
      begin: /<:/
    };
    var NUMBER = {
      className: 'number',
      begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
      relevance: 0
    };
    var CHAR = {
      className: 'string',
      begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
    };
    var INTERPOLATION = {
      className: 'subst',
      begin: /\$\(/,
      end: /\)/,
      keywords: KEYWORDS
    };
    var INTERPOLATED_VARIABLE = {
      className: 'variable',
      begin: '\\$' + VARIABLE_NAME_RE
    };
    var STRING = {
      className: 'string',
      contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
      variants: [{
        begin: /\w*"""/,
        end: /"""\w*/,
        relevance: 10
      }, {
        begin: /\w*"/,
        end: /"\w*/
      }]
    };
    var COMMAND = {
      className: 'string',
      contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
      begin: '`',
      end: '`'
    };
    var MACROCALL = {
      className: 'meta',
      begin: '@' + VARIABLE_NAME_RE
    };
    var COMMENT = {
      className: 'comment',
      variants: [{
        begin: '#=',
        end: '=#',
        relevance: 10
      }, {
        begin: '#',
        end: '$'
      }]
    };
    DEFAULT.contains = [NUMBER, CHAR, TYPE_ANNOTATION, SUBTYPE, STRING, COMMAND, MACROCALL, COMMENT, hljs.HASH_COMMENT_MODE];
    INTERPOLATION.contains = DEFAULT.contains;
    return DEFAULT;
  };
})(require('buffer').Buffer);