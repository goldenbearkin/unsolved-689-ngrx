import { ActionReducer, Action } from '@ngrx/store';
import { List, Record } from 'immutable';

export const UNSOLVED_COMPLETE = 'UNSOLVED_COMPLETE';
export const UNSOLVED_CREATE = 'UNSOLVED_CREATE';
export const UNSOLVED_DESTROY = 'UNSOLVED_DESTROY';
export const UNSOLVED_DESTROY_COMPLETED = 'UNSOLVED_DESTROY_COMPLETED';
export const UNSOLVED_TOGGLE_COMPLETE_ALL = 'UNSOLVED_TOGGLE_COMPLETE_ALL';
export const UNSOLVED_UNDO_COMPLETE = 'UNSOLVED_UNDO_COMPLETE';
export const UNSOLVED_UPDATE_TEXT = 'UNSOLVED_UPDATE_TEXT';

// define reducer data structure
interface T {
  id: number;
  complete: boolean;
  text: string;
}

const R: {new(p:T): T} = <any>Record({
  id: null,
  complete: null,
  text: null
});

export class Todo extends R {

  constructor (text: string, complete: boolean) {
    super({
      id: Date.now() + Math.round(Math.random() * 1000),
      complete: complete,
      text: text,
    });
  }
}

// initialize reducer
let initValue: string[] = [
  "西九設計比賽漏報利益風波(未上台)",
  "梁振英大宅僭建風波",
  "麥齊光曾景文涉貪案",
  "陳茂波涉嫌經營劏房及避稅事件",
  "香港境內水貨客問題",
  "反國民教育運動",
  "新界東北發展計劃",
  "陳茂波酒後駕駛爭議",
  "香港數碼廣播停播風波",
  "南丫島撞船事故海事處失職爭議",
  "龍尾灘發展爭議",
  "林奮強偷步賣樓爭議",
  "長者生活津貼資產申報爭議",
  "推出買家印花稅爭議",
  "劉夢熊指控梁振英涉賄選 以任命行政會議成員及推薦政協常委「報答」卻無兌現承諾 引起爭議",
  "梁振英發律師信給練乙錚爭議",
  "中國大陸人士搶購香港奶粉事件",
  "2013年至2014年度財政預算案撥款爭議",
  "香港政府「盲捐」一億予四川省政府爭議",
  "張震遠香港商品交易所爆煲欠下龐大債務",
  "啟德發展計劃體育城保留與否的爭議",
  "垃圾堆填區擴建爭議",
  "梁振英高調要求就林慧思老師事件提交報告 利用教育局和學校之力對個人進行狙擊，引起社會廣泛爭議",
  "興建垃圾焚化爐爭議",
  "陳玉峰被低調通緝事件",
  "梁振英多次迴避港人平反六四訴求",
  "招顯聰兩度被拘捕又釋放事件",
  "利用或煽動愛港力、愛港之聲、香港青年關愛協會、齊心行動、幫港出聲等親共組織撕裂香港",
  "中央政策組全職顧問高靜芝越權任命公職爭議",
  "邵善波調整中策組工作惹起爭議",
  "中策組收回教資會轄下研究資助局的二千萬政策研究撥款權惹起爭議",
  "任命香港非永久居民陳冉為公務員惹起爭議",
  "梁振英天水圍落區涉及黑社會引爭議",
  "陳茂波涉嫌囤積農地在新界東北發展計劃有利益衝突爭議",
  "開發香港郊野公園引起社會爭議",
  "APEC首腦會議菲律賓人質事件港菲官員會面爭議",
  "港視HKTV不獲發牌照引起爭議",
  "中環興建軍事碼頭爭議",
  "高鐵工程超支延期，不斷追加撥款引起爭議",
  "梁振英涉嫌貪污收取澳洲企業UGL約5000萬港元",
  "銅鑼灣書店老闆員工包括李波等5人被公安越境拘捕事件",
  "831人大制定假普選，引發928事件，及雨傘運動",
  "機場擴建第三條跑道爭議",
  "區議會各區一億元大白象計劃爭議",
  "梁振英籲商界勿捐錢予本地大學引起爭議",
  "強行通過成立創科局，浪費公帑益梁粉",
  "2016施政報告出現44次「一帶一路」，以公帑資助一帶一路國家的學生來港升學，離地政策引起爭議",
  "2014中共發表一國兩制白皮書收緊香港自治",
  "全港屋邨鉛水風波",
  "港大校委否決陳文敏出任副校長風波，原因千奇百怪引爭議",
  "梁振英任命教育界沙皇李國章為港大校委會主席，引發學生廢除特首校監必然制",
  "中聯辦主任張曉明指香港特首地位超然三權之上言論惹爭議",
  "劉進圖遇襲逾萬人遊行捍衛新聞自由",
  "財委會強行通過新界東北發展前期撥款，吳亮星手法惹爭議",
  "匿港九年大陸童肖友懷自首風波，居留權引發爭議",
  "TSA增加香港學生學業壓力，政府欲保留引爭議",
  "貨櫃碼頭工人罷工40天終獲加薪9.8%",
  "梁振英未兌現競選承諾設立標準工時及取消強積金對沖安排",
  "蘋果日報大樓和壹傳媒創辦人黎智英的寓所在凌晨先後遭人投擲三枚燃燒彈襲擊",
  "2015施政報告，特首打壓言論自由，批評港大學生會刊物《學苑》編寫的香港民族論",
  "政府與新世界集團以夥伴合作模式擴建星光大道被指官商勾結引發爭議",
  "林鄭月娥形容自己「官到無求膽自大」引爭議",
  "梁振英次女梁齊昕自殺風波",
  "當年領導六七暴動的楊光舉殯，獲中聯辦主任、特首送別，引起爭議",
  "政改方案8票支持，28票反對，被大比數否決",
  "學民思潮召集人黃之鋒與女友錢詩文晚上在大角嘴榆樹街遇襲",
  "政府強行通過網絡廿三條，無視網民要求加設「公平使用」條款",
  "先後任命劉江華出任政制及內地事務局副局長及民政事務局局長，引發爭議",
  "港珠澳大橋工程爆出醜聞，人工島錄得移動，工程無法在2016年底完工",
  "政府任命反佔中律師陳曼琪及要求解散嶺南大學學生會的律師會前會長何君堯為嶺南大學新校董，引發爭議",
  "公共醫療醫生協會發起靜坐抗議行動，不滿醫管局拒絕跟隨高級公務員加薪3%",
  "特首梁振英Facebook帳戶，被揭與多名台灣性感少女交友，卻辯稱疑被黑客於交友日期後入侵",
  "退休保障諮詢文件出爐，政府扭曲港大教授周永新的方案是不論貧富，預設立場假諮詢引起爭議",
  "大年初一晚上，旺角因為警察及食環處打壓掃蕩小販，引發警民流血衝突。",
  "暗角七魔警圍毆曾健超事件",
  "朱經緯警司亂用警棍襲擊途人事件",
  "屯門良景警察與黑社會合作打壓夜市小販事件",
  "教育局鼓勵普教中棄廣東話引爭議",
  "高鐵工程延誤超支不斷 一地兩檢涉違基本法引爭議",
  "建制派議員提出國安法納入基本法附件三代替廿三條引爭議",
  "律政司決定不起訴前廉政專員湯顯明涉嫌貪污腐敗案引起爭議",
  "2015區議會選舉中出羊子發選舉通函違憲爭議",
  "商台為續牌先放逐後粗暴解僱李慧玲風波",
  "一國兩制研究中心透露計劃開放邊境禁區，容許內地人免簽證入境，變相拆除邊界，引起爭議",
  "吳麗英被警員拉倒血流披面卻被判胸部襲警引起爭議",
  "梁振英介入 已被終止學籍城大博士生成功翻生獲頒學位，干擾院校自主及學術自由，引起爭議",
  "梁振英指政策不可被月薪低於14,000元的窮人壟斷 特首帶頭歧視窮人，引起爭議",
  "梁振英稱宗教界、體育界沒有經濟貢獻 引起爭議",
  "梁振英當選後 不設立檔案法 短時間內將7萬呎檔案銷毀 引起爭議",
  "商務及經濟發展局及轄下的旅遊事務署監管不力 盛事基金「混帳」 無王管變提款機引爭議",
  "因不斷打壓，市場扭曲，白色恐怖，傳媒人蔡東豪結束「主場新聞」",
  "梁振英疑杯葛渣馬開幕逼渣打抽《蘋果》廣告引爭議",
  "「保普選反佔中大聯盟」舉行反佔中遊行，疑似大陸遊客接受訪問時卻承認鳩嗚「購物」",
  "14歲粉筆少女「連儂牆」畫花引來14名警員圍捕，警方無理申請保護令，被判入女童院三星期，引起激烈爭議",
  "教育局指廣東話非「法定語言」及擬推行簡體字教學引爭議",
  "廣播處長鄧忍光干預港台編輯自主引起爭議 ",
  "紅van非法霸通菜街行車線數十年 警方縱容潮聯佔路引起爭議",
  "2015施政報告 政府資助學生在中、小學階段必須到內地交流，洗腦團引起爭議",
  "港人港地政策無聲無息擱置重推無期引爭議",
  "吳亮星飲鉛水延年益壽論引爭議",
  "吳亮星指銅鑼灣書店失蹤5人坐洗頭艇北上嫖妓引爭議",
  "梁振英拒絕向中國旅客開徵陸路入境稅並指責港人未富先驕引爭議",
  "警察施87催淚彈驅佔中示威者引爭議",
  "警隊招標2700萬買3架水炮車打壓示威者引爭議",
  "國家主席胡錦濤訪港期間，警方出動「大支裝、滅火筒式」胡椒噴霧對付示威者，被批評使用過份武力引爭議",
  "教育局局長吳克儉兩年半外訪21次花公帑370萬被轟對教育無幫助引爭議",
  "梁振英夜訪避寒中心被轟利用露宿者抽水",
  "梁振英怪論指港鐵服務優質，表示非一般市民日常生活中可以感受引爭議",
  "政府未有根據《廣播條例》於牌照屆滿前最少12個月前通知亞視是否續牌　梁振英卻辯稱遵守程序公義引爭議",
  "行會成員兼鄉議局副主席張學明被揭疑在大埔林村套丁，發展8幢丁屋屋苑圖利引爭議",
  "創科局局長楊偉雄上任前讚Uber有創意，上任後卻批評Uber挑戰香港法治引起爭議",
  "選管會立法會新東補選無理打壓梁天琦 自我審查阻郵寄政綱",
  "學生自殺成風 一學年內22人選擇結束生命",
  "陳鑑林粗暴剪布 強行通過高鐵超支撥款",
  "教育局局長吳克儉被百中學生圍堵 玩手機無視訴求引學生聲討",
  "康文署禁劇團場刊“國立”字眼 阻登台灣大學全名 自我審查引爭議",
  "委任蘇慶和為市建局主席, 其間找田生地產合作並代市建局發展, 導致市建局行政總監譚小瑩突然以理念與主席不同請辭",
  "地政總署助理署長林嘉芬涉以權謀私 在元朗錦田囤積土地",
  "梁振英家庭機場濫權風波 《特事特辦》"
];

let todos = List<Todo>();

initValue.map(e => {
  todos = todos.unshift(new Todo(e, false));
});

// reducer definition
export const todosReducer: ActionReducer<List<Todo>> = (state: List<Todo> = todos, action: Action) => {
  switch (action.type) {
    case UNSOLVED_CREATE:
      return state.unshift(new Todo(action.payload, false));
      
    case UNSOLVED_COMPLETE:
      return state.setIn([state.findIndex(e => e.id === action.payload), 'complete'], true);
      
    case UNSOLVED_UNDO_COMPLETE:
      return state.setIn([state.findIndex(e => e.id === action.payload), 'complete'], false);
        
    case UNSOLVED_DESTROY:
      // return state.delete(getIndex(state, action.payload));
      return state.delete(state.findIndex(e => e.id === action.payload));
      
    case UNSOLVED_DESTROY_COMPLETED:
      return state
        .filter(todo => !todo.complete)
        .toList();
        
    case UNSOLVED_TOGGLE_COMPLETE_ALL:
      const setCompleted = !areAllComplete(state);
      return state
              .map(todo => todo = new Todo(todo.text, setCompleted))
              .toList();
      // return state.filter(unsolved => !unsolved.complete);
   
    default:
        return state;
  }
}

// helper
function areAllComplete(todos: List<Todo>): boolean {
  return todos.every(todo => todo.complete === true);
}