var MyLiveChat_InitOnce, MyLiveChat_CalcImagePath, MyLiveChat_CalcCustomUrl, MyLiveChat_InitOnceInline, MyLiveChat_InitOnceFinal, MyLiveChat_IsDuringOperatingHours, MyLiveChat_InitStorate, MyLiveChat_LoadUserDataBehavior, MyLiveChat_SupportLocalData, MyLiveChat_GetCookie, MyLiveChat_SetCookie, MyLiveChat_GetLocalData, MyLiveChat_SetLocalData, MyLiveChat_InitID, MyLiveChat_SyncToCPR, MyLiveChat_PatternMatch, MyLiveChat_HtmlEncode, MyLiveChat_InvokeEvent, MyLiveChat_PlaySound, MyLiveChat_DelayRequest, MyLiveChat_SetNextReqTimeout, MyLiveChat_NextRequest, MyLiveChat_SyncFromCPR, MyLiveChat_CPRDecode, MyLiveChat_CPREncode, MyLiveChat_GetSourceUrl, MyLiveChat_GetReferrer, MyLiveChat_AppendToUrl, MyLiveChat_ChangeUrl, MyLiveChat_GetDialogUrl, MyLiveChat_IsUseInlineChat, MyLiveChat_OpenDialog, MyLiveChat_UpdateWidgetInline, MyLiveChat_ShowChatWidget, MyLiveChat_ForEachElement, MyLiveChat_WriteOrSetHTML, MyLiveChat_Initialize, MyLiveChat_RunLoadingHandler, MyLiveChat_AddCustomData, MergeCustomData, ConvertToJson, MyLiveChat_InlineTriggerMatch, MyLiveChat_FilterStringMatch, MyLiveChat_InlineTriggerNewMatch, MyLiveChat_MatchNewTriggers, MyLiveChat_MatchServerTriggers, MyLiveChat_TryServerInvitation, MyLiveChat_OnServerInvitation, MyLiveChat_RestoreServerInvite, MyLiveChat_StartServerInvitation, MyLiveChat_InlineChatInit, mlcwidget_findelements, mlcwidget_calcpoint, mlcwidget_calcbodypoint, mlcwidget_nextposition, MyLiveChat_CalcBodyPoint, MyLiveChat_CalcPoint, MyLiveChat_MovePoint, MyLiveChat_SetUserName, MyLiveChat_SetEmail, MyLiveChat_SetDepartment, MyLiveChat_SetSubject, MyLiveChat_SetQuestion, MyLiveChat_SetCustomData, MyLiveChat_SetContextData, MyLiveChat_SetProductName, MyLiveChat_SetProductKey, MyLiveChat_OnUserIsOnline, MyLiveChat_PrepairInlineChat, MyLiveChat_ShowInPageChat, MyLiveChat_ShowInlineChat, MyLiveChat_ShowChatBox, MyLiveChat_ShowInvite, MyLiveChat_HideInvite, MyLiveChat_AcceptInvite, MyLiveChat_OnInviteAccepted, MyLiveChat_RejectInvite, MyLiveChat_ShowInviteTemplate, MyLiveChat_HideInviteTemplate, isnewid;
(function() {
    var a = ["_GetText", "toUpperCase", "TEXT_", "_GetNumber", "RawLangJson", "HomePage", "//www.$1", "replace", "SiteUrl", "IsMobile", "userAgent", "test", "LocalDataDisabled", "", "1", "MobileDisabled", "SoundInvitation", "alarm", "SoundInvitationVolume", "50", "SoundNudge", "msn_nudge", "SoundNudgeVolume", "SoundMessage", "msn_message", "SoundMessageVolume", "SoundJoin", "SoundJoinVolume", "OperatingHoursEnable", "OperatingHoursForceOffline", "OperatingHoursSchedule", "0", "OperatingHoursTimeZone", "AgentTimeZone", "OperatingHoursCheckWeekday", "OperatingHoursValWeekday", "OperatingHoursCheckWeekend", "OperatingHoursValWeekend", "OperatingHoursCheckDay0", "OperatingHoursValDay0", "OperatingHoursCheckDay1", "OperatingHoursValDay1", "OperatingHoursCheckDay2", "OperatingHoursValDay2", "OperatingHoursCheckDay3", "OperatingHoursValDay3", "OperatingHoursCheckDay4", "OperatingHoursValDay4", "OperatingHoursCheckDay5", "OperatingHoursValDay5", "OperatingHoursCheckDay6", "OperatingHoursValDay6", "ButtonOnlineTooltip", "ButtonOfflineTooltip", "LinkOnlineTooltip", "LinkOfflineTooltip", "LinkOnlineCode", "Click here to chat", "LinkOfflineCode", "Click here to leave a message", "BoxOnlineCode", "Online", "BoxOfflineCode", "Leave a message", "BoxOnlineTooltip", "BoxOfflineTooltip", "BoxMessage", "BoxPrompt", "DialogWidth", "DialogHeight", "InviteTemplate", "5", "InvitePosition", "middlecenter", "InviteStartPos", "topcenter", "InviteOffsetX", "InviteOffsetY", "InviteHeadline", "Chat Invitation", "InviteMessage", "Hello, my name is (AGENT). How may I help you today?", "InviteUseAgentPhoto", "InviteAcceptText", "TEXT_ACCEPTINVITE", "Chat Now", "InviteRejectText", "TEXT_REJECTINVITE", "No Thanks", "InviteShowTimeout", "InviteHideTimeout", "InviteAcceptTooltip", "InviteRejectTooltip", "InvitePlaySound", "InviteSoundFile", "InPagePosition", "bottomright", "InPageStartPos", "InPageOffsetX", "InPageOffsetY", "InPageWidth", "InPageHeight", "InPageHeadBgColor", "InPageHeadBorderColor", "InPageHeadBorderWidth", "InPageHeadColor", "white", "InPageHeadFont", "InPageHeadOffline", "UI_Inline_Offline", "InPageHeadOnline", "UI_Inline_Online", "Chat now", "InPageHeadSize", "15px", "InPageImageOnline", "InPageImageOffline", "InPageImageUrlOnline", "InPageImageUrlOffline", "InPageBubbleTopClosed", "InPageUseBubbleTop", "InPageUseBubbleTopOnlineOnly", "HasReadyAgents", "InPageBubbleTop", "InPageBubbleTopUrl", "WidgetHideInline", "WidgetHideWidget", "WidgetFixedMode", "WidgetStartPos", "middleleft", "WidgetPosition", "WidgetOffsetX", "WidgetOffsetY", "WidgetHoverOffsetX", "WidgetHoverOffsetY", "WidgetBodyPadding", "WidgetOnlineImage", "WidgetOfflineImage", "WidgetOnlineImageUrl", "WidgetOfflineImageUrl", "WidgetHoverOnlineImage", "WidgetHoverOfflineImage", "WidgetHoverOnlineImageUrl", "WidgetHoverOfflineImageUrl", "Type your question here and click below...", "DialogOption", "status=1,width=", ",height=", ",resizable=1", ",left=", "availWidth", "floor", ",top=", "availHeight", "PopupBlockedMsg", "Pop-up blocker detected.", "SupportShowFeedbackUpload", "FeedbackTitle", "UI_Feedback_Title", "Offline Message", "FeedbackHeadline", "UI_Feedback_Headline", "FeedbackMessage", "UI_Feedback_Message", "There are no agents available right now to take your call. Please leave a message and we will reply by email.", "WaitingTitle", "UI_Waiting_Title", "LiveChat", "WaitingHeadline", "UI_Waiting_Headline", "Live Chat", "WaitingMessage", "UI_Waiting_Message", "Thank you for contacting us. To serve you better please provide the following information:", "WaitingOfflineDepartment", "Enable", "WaitingShowOfflineText", "WaitingPhoto", "SupportTitle", "UI_Support_Title", "SupportAgentPhoto", "images/livechat.jpg", "WaitingShowForClick", "WaitingShowForInvite", "InlineChatWaitingShowForClick", "InlineChatWaitingToFeedback", "InlineChatSelectAgent", "InlineChatSelectAgentByDept", "InlineChatSelectAgentOnlineOnly", "InlineChatHideSubject", "InlineChatFeedbackBehavior", "Show", "InlineChatFeedbackRedirectUrl", "InlineChatIntroColor", "InlineChatIntroFont", "InlineChatIntroSize", "InlineChatIntroCssText", "line-height:1.3em;", "font-family:", ";", "font-size:", "InlineChatBackColor", "InlineChatTextColor", "InlineChatEmbedColor", "InlineChatShowLogo", "InlineChatRoundSize", "InlineChatRoundRadius", "InlineChatRoundPadding", "InlineChatRoundMargin", "InlineChatRoundSpace", "ShowAgentPanel", "InlineChatShowAgentPanel", "ShowAgentPhoto", "InlineChatShowAgentPhoto", "ShowBrandPhoto", "InlineChatShowBrandPhoto", "InPageTemplate", "InPageTemplateMobile", "ButtonOnlineImage", "ButtonOfflineImage", "BoxOnlinePhoto", "BoxOfflinePhoto", "InvitePhoto", "FeedbackLogo", "FeedbackPhoto", "WaitingLogo", "SupportPhoto", "InPageImage", "Offline", "InlineChatOnlineLogo", ".png", "InlineChatOfflineLogo", "InlineChatRoundOnline", "InlineChatRoundOffline", "BrandLogo", "yes", "upload", "uploading", "log", "Customization/Customer/", "HCCID", "/", ".uploading", ".gif", "custom", "Url", "//", "indexOf", ",invitephoto_1,invitephoto_7,invitephoto_8,buttononlineimage_2,buttononlineimage_3,buttononlineimage_4,", "buttononlineimage_5,buttononlineimage_6,buttononlineimage_7,buttononlineimage_8,buttononlineimage_17,buttononlineimage_18,buttononlineimage_19,buttononlineimage_20,", "buttonofflineimage_2,buttonofflineimage_3,buttonofflineimage_4,", "buttonofflineimage_5,buttonofflineimage_6,buttonofflineimage_7,buttonofflineimage_8,buttonofflineimage_17,buttonofflineimage_18,buttonofflineimage_19,buttonofflineimage_20,", "smartphoto_1,smartphoto_2,smartphoto_3,smartphoto_9,smartphoto_10,", "_", ",", "toLowerCase", "Customization/Template/", "3", "4", "Online_", "Offline_", "WaitingFieldEmail", "InlineChatWaitingFieldEmail", "WaitingFieldQuestion", "InlineChatWaitingFieldQuestion", "WaitingFieldDepartment", "InlineChatWaitingFieldDepartment", "SupportShowTopToolbar", "InlineChatShowTopToolbar", "SupportShowSaveButton", "InlineChatShowSaveButton", "SupportShowMailButton", "InlineChatShowMailButton", "SupportShowPrintButton", "InlineChatShowPrintButton", "SupportShowSoundButton", "InlineChatShowSoundButton", "SupportShowRatingButton", "InlineChatShowRatingButton", "SupportShowUploadButton", "InlineChatShowUploadButton", "SupportShowCloseButton", "InlineChatShowCloseButton", "SupportShowEditToolbar", "InlineChatShowEditToolbar", "SupportShowBoldButton", "InlineChatShowBoldButton", "SupportShowItalicButton", "InlineChatShowItalicButton", "SupportShowUnderlineButton", "InlineChatShowUnderlineButton", "SupportShowEmotionButton", "InlineChatShowEmotionButton", "SurveyVisible", "InlineChatSurveyVisible", "SurveyUseEmail", "InlineChatSurveyUseEmail", "SurveyUseRating", "InlineChatSurveyUseRating", "SurveyUseComment", "InlineChatSurveyUseComment", "maxWaitTime", "InlineChatmaxWaitTime", "OnholdWaitTime", "InlineChatOnholdWaitTime", "CustomDataDefinition", "RawConfig", "SourceCustomData", "Department", "RawQuery", "SourceDepartment", "CustomData", "length", "text", "undefined", "LS_ShowAllCustomers", "False", "Strict", "WaitingDepartmentMode", "Auto", "Departments", "Name", "getTimezoneOffset", "getTime", "getHours", "getMinutes", "getDay", "-", "split", "OperatingHoursCheckDay", "OperatingHoursValDay", ":", "localStorage", "userDataBehavior", "sessionStorage", "body", "input", "createElement", "type", "hidden", "setAttribute", "firstChild", "insertBefore", "behavior", "style", "url(\'#default#userData\')", "mlc-", "load", "any", "mlctempcookie", "cookie", "=", "; path=/;", "getSeconds", "setSeconds", " expires=", "toUTCString", "n", "getAttribute", "v", "e", "mlc2v-", "getItem", "mlc2e-", "removeAttribute", "mlc2-", "save", "setItem", "removeItem", "CCCustomerId", "null", "substring", "RandomID", "id expired :", "CPRFIELDS", "MLC", "MLCCPRDT", "MLCCPPBT", "PageBeginTime", "MLCCPAPT", "regexp:", "ig", "*", "<br/>", "&#39;", "&quot;", "&gt;", "&lt;", "&amp;", "HandleLiveChatEvent", "InvitePanel", "mlcnosound", "UrlBase", "Sound/", ".mp3", "Audio", "autoplay", "src", "volume", "BGSOUND", "LastInitTime", "NextRequestTimeout", "random", "IsDialog", "IsDesignMode", "NextRequestTime", "RequestTimerId", "LastLoadTime", "LastSyncTime", "VISIT", "ReSyncFormCPRTimerId", "true", "false", "s:", "n:", "a:", "=|=", "boolean", "string", "number", "join", "href", "location", "referrer", "://", "uadt", "min", "max", "3:", "|", "Actions", "-1", "SourceContextData", "title", "..", "value", "items", "encodeURIComponent", "&OAuth=", "mlcoauth", "&UserKey=", "SourceKey", "&Name=", "SourceName", "&Email=", "SourceEmail", "&Department=", "&Url=", "&Referrer=", "&Subject=", "SourceSubject", "&Question=", "SourceQuestion", "&CustomData=", "&ProductName=", "SourceProductName", "&ProductKey=", "SourceProductKey", "&ContextData=", "&ScreenSize=", "width", "height", "&PageTitle=", "&uats=", "ResourcesVary", "LastScriptError", "&err=", "message", "&", "match", "MyLiveChatScriptTagID", "getElementById", "SCRIPT", "head", "getElementsByTagName", "livechat2.aspx?apimode=sync&HCCID=", "&CCCustomerId=", "&Type=", "_RequestingServerInvitation", "_RSID", "&RSI=", "&RSI=1", "id", "_checksynctimerid", "replaceChild", "parentNode", "inpage", "FeedbackBehavior", "Redirect", "FeedbackRedirectUrl", "PrivateChatUrl", "chat/", "#", "?", "HCCID=", "&Mode=", "Click", "&ChatType=", "dialog", "default", "Widget", "WidgetOpenNewWindow", "True", "InlineChatIsActive", "NewWin", "Popup", "UIMobileMode", "Dialog", "Button", "OpenNewWindow", "Invite", "AddActions", "InlineChatIsExpanded", "InlineChatDoCollapse", "InlineChatDoExpand", "mylivechatdialog", "open", "inlinepanel", "WidgetObject", "show", "hide", "Hide", "AgentStatus", "Activate", "querySelectorAll", "MyLiveChatContainer", "innerHTML", "_script_tag", "cobrowsedialog", "Initializing", "Loading", "LoadingHandlers", "_OnInitCalled", "MyLiveChat_OnInit", "SyncType", "FirstRequestTimeout", "SyncStatus", "INVITE", "SyncResult", "InlineTriggerAgentId", "AgentId", "InlineTriggerAgentName", "InlineTriggerMessage", "(AGENT)", "FindAgentPhoto.aspx?hccid=", "&name=", "VisitorStatus", "SERVERINVITE", "ACCEPT", "READY", "EXPIRED", "ERROR", "ButtonImageUrl", "ButtonTooltip", "LinkHtmlCode", "LinkTooltip", "BoxHtmlCode", "BoxTooltip", "BoxPhotoUrl", "chatbutton", "chatlink", "chatbox", "chatwidget", "chatapi", "none", "display:", "Inited", "ShowButton", "<img id=\'MyLiveChatScriptButton\' onclick=\'MyLiveChat_OpenDialog()\' src=\'", "\' title=\'", "\' border=\'0\' style=\'cursor:pointer;", "\'>", "LastButtonImageUrl", "ShowLink", "<a id=\'MyLiveChatScriptLink\' onclick=\'MyLiveChat_OpenDialog()\' title=\'", "\' style=\'cursor:pointer;", "</a>", "LastLinkHtmlCode", "ShowBox", "<div id=\'MyLiveChatScriptBox\'></div>", "chatinline", "MyLiveChatScriptButton", "display", "MyLiveChatScriptLink", "MyLiveChatScriptBox", "concat", "_mlctemp_=", "Custom", "push", "function", "\"", "toString", "charCodeAt", "\\x", "\\u", "constructor", "{", "}", "[", "]", "new Date(", ");", "source", "ignoreCase", "i", "global", "g", "multiline", "m", "disabled", "department", "waittime", "domain", "urlpattern", "refpattern", "VisitorReferUrl", "locationkey", "VisitorLocation", "InlineTriggerDepartment", "InlineTriggerSound", "nosound", "!", "like", "eq", "sw", "ew", "matchnum", "filters", "op", "values", "url", "ref", "name", "InlineTriggers", "actions", "invite", "InlineTriggerDefinition", "_RejectInPage", "InviteTriggerSkipMobile", "PageServerInvitation", "IsByAgentInvitation", "IsByServerInvitation", "cpmsitime", "cpmsitry", "cpmsiaid", "cpmsiadn", "trigger", "SetInlineChatAction", "TriggerUseTemplate", "InlineChatStartChat", "InlineChatIsChatting", "_InlineAction", "InlineChatCloseChat", "s", "InlineChatIsCollapsed", "mlcdebugusenewmode", "TEXTAREA", "cssText", "width:900px;height:400px;position:fixed;left:52px;top:150px;", "appendChild", "\x0D\x0A", "InlineChatUID", "substr", "UID ", "expand", "collapse", "connected", "chatting", "actionparams", "reject", "startwait", "resume", "EnsureChatReady", "EnsureChatClose", "closechat", "chatend", "OnFrameLoad", "FrameWin", "IsConnected", "OnChatClose", "childNodes", "nodeType", "className", "float", "topleft", "topright", "middleright", "bottomleft", "bottomcenter", "compatMode", "BackCompat", "documentElement", "clientWidth", "clientHeight", "bodypadding", "left", "right", "top", "bottom", "updateposition", "prevpp", "startpos", "position", "anchorpos", "offsetWidth", "offsetHeight", "offsetx", "liveoffsetx", "dragoffsetx", "fixedmode", "scrollLeft", "offsety", "liveoffsety", "dragoffsety", "scrollTop", "movefactor", "ceil", "px", "Instances", "MlcBuidinWidget", "CreateInstance", "ApplyOption", "div", "DIV", "fixed", "absolute", "cursor", "pointer", "1px", "zIndex", "98765", "overflow", "visible", "<img border=\'0\' style=\'max-width:none!important;max-height:none!important;\'/>", "img", "onclick", "showclose", "closebtn", "height:20px;width:20px;background-image:url(", "images/close.png);background-repeat:no-repeat;background-position:center center;", "removeChild", "hideoffsetx", "hideoffsety", "onmouseover", "showoffsetx", "showoffsety", "onmouseout", "timerid", "postimer", "marginLeft", "runtime_imageurl", "onlineimageurl", "offlineimageurl", "runtime_imageurlhover", "onlineimageurlhover", "offlineimageurlhover", "imageurl", "imageurlhover", "onload", "innerHeight", "innerWidth", "UserKey", "Email", "BoxTemplateDiv", "MyLiveChatBoxTemplateScriptTagID", "BoxTemplateInit", "chatbox2.aspx?HCCID=", "&_ts=", "AcceptTime", "ShowInvite", "InviteSoundSent", "livechat/Sound/", "InviteUseTemplate", "invitetime", "REJECT", "InviteTemplateDiv", "position:absolute;width:0px;height:0px;z-index:16543220;display:none", "MyLiveChatInviteTemplateScriptTagID", "InviteTemplateInit", "chatinvite2.aspx?HCCID=", "addEventListener", "mouseover", "keydown", "focus", "blur", "attachEvent", "onkeydown", "<script type=\'text/javascript\' src=\'", "dialog2.aspx?HCCID=", "\'></script>", "mlc v20210710c"];

    function b(b) {
        b = b[a[1]]();
        return MyLiveChat[a[2] + b] || b
    }

    function c(b, a) {
        var c = parseInt(b);
        if (isNaN(c)) {
            return a
        };
        return c
    }

    function d(b) {
        b = b[a[1]]();
        return MyLiveChat[a[2] + b] || b
    }

    function e(b, a) {
        var c = parseInt(b);
        if (isNaN(c)) {
            return a
        };
        return c
    }

    function f(b) {
        b = b[a[1]]();
        return MyLiveChat[a[2] + b] || b
    }

    function g(b, a) {
        var c = parseInt(b);
        if (isNaN(c)) {
            return a
        };
        return c
    }

    function h(b) {
        b = b[a[1]]();
        return MyLiveChat[a[2] + b] || b
    }

    function j(b, a) {
        var c = parseInt(b);
        if (isNaN(c)) {
            return a
        };
        return c
    }

    function k(b) {
        b = b[a[1]]();
        return MyLiveChat[a[2] + b] || b
    }

    function l(b, a) {
        var c = parseInt(b);
        if (isNaN(c)) {
            return a
        };
        return c
    }

    function m() {
        for (var b in MyLiveChat[a[4]]) {
            MyLiveChat[a[2] + b[a[1]]()] = MyLiveChat[a[4]][b]
        };
        if (!MyLiveChat[a[5]]) {
            MyLiveChat[a[5]] = MyLiveChat[a[8]][a[7]](/\/\/[a-z0-9]+\.([^\/]+\/).*$/gi, a[6])
        };
        MyLiveChat[a[9]] = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i [a[11]](navigator[a[10]]);
        MyLiveChat[a[12]] = (MyLiveChat[a[12]] || a[13]) == a[14];
        MyLiveChat[a[15]] = (MyLiveChat[a[15]] || a[13]) == a[14];
        MyLiveChat[a[16]] = MyLiveChat[a[16]] || a[17];
        MyLiveChat[a[18]] = MyLiveChat[a[18]] || a[19];
        MyLiveChat[a[20]] = MyLiveChat[a[20]] || a[21];
        MyLiveChat[a[22]] = MyLiveChat[a[22]] || a[19];
        MyLiveChat[a[23]] = MyLiveChat[a[23]] || a[24];
        MyLiveChat[a[25]] = MyLiveChat[a[25]] || a[19];
        MyLiveChat[a[26]] = MyLiveChat[a[26]] || a[13];
        MyLiveChat[a[27]] = MyLiveChat[a[27]] || a[19];
        MyLiveChat[a[28]] = (MyLiveChat[a[28]] || a[13]) == a[14];
        MyLiveChat[a[29]] = MyLiveChat[a[29]] == a[14];
        MyLiveChat[a[30]] = MyLiveChat[a[30]] || a[31];
        MyLiveChat[a[32]] = MyLiveChat[a[33]];
        MyLiveChat[a[34]] = (MyLiveChat[a[34]] || a[13]) == a[14];
        MyLiveChat[a[35]] = MyLiveChat[a[35]] || a[13];
        MyLiveChat[a[36]] = (MyLiveChat[a[36]] || a[13]) == a[14];
        MyLiveChat[a[37]] = MyLiveChat[a[37]] || a[13];
        MyLiveChat[a[38]] = (MyLiveChat[a[38]] || a[13]) == a[14];
        MyLiveChat[a[39]] = MyLiveChat[a[39]] || a[13];
        MyLiveChat[a[40]] = (MyLiveChat[a[40]] || a[13]) == a[14];
        MyLiveChat[a[41]] = MyLiveChat[a[41]] || a[13];
        MyLiveChat[a[42]] = (MyLiveChat[a[42]] || a[13]) == a[14];
        MyLiveChat[a[43]] = MyLiveChat[a[43]] || a[13];
        MyLiveChat[a[44]] = (MyLiveChat[a[44]] || a[13]) == a[14];
        MyLiveChat[a[45]] = MyLiveChat[a[45]] || a[13];
        MyLiveChat[a[46]] = (MyLiveChat[a[46]] || a[13]) == a[14];
        MyLiveChat[a[47]] = MyLiveChat[a[47]] || a[13];
        MyLiveChat[a[48]] = (MyLiveChat[a[48]] || a[13]) == a[14];
        MyLiveChat[a[49]] = MyLiveChat[a[49]] || a[13];
        MyLiveChat[a[50]] = (MyLiveChat[a[50]] || a[13]) == a[14];
        MyLiveChat[a[51]] = MyLiveChat[a[51]] || a[13];
        MyLiveChat[a[52]] = MyLiveChat[a[52]] || a[13];
        MyLiveChat[a[53]] = MyLiveChat[a[53]] || a[13];
        MyLiveChat[a[54]] = MyLiveChat[a[54]] || a[13];
        MyLiveChat[a[55]] = MyLiveChat[a[55]] || a[13];
        MyLiveChat[a[56]] = MyLiveChat[a[56]] || a[57];
        MyLiveChat[a[58]] = MyLiveChat[a[58]] || a[59];
        MyLiveChat[a[60]] = MyLiveChat[a[60]] || a[61];
        MyLiveChat[a[62]] = MyLiveChat[a[62]] || a[63];
        MyLiveChat[a[64]] = MyLiveChat[a[64]] || a[13];
        MyLiveChat[a[65]] = MyLiveChat[a[65]] || a[13];
        MyLiveChat[a[66]] = MyLiveChat[a[66]] || MyLiveChat[a[67]];
        MyLiveChat[a[68]] = MyLiveChat[a[3]](MyLiveChat[a[68]], 580);
        MyLiveChat[a[69]] = MyLiveChat[a[3]](MyLiveChat[a[69]], 580);
        MyLiveChat[a[70]] = MyLiveChat[a[70]] || a[71];
        MyLiveChat[a[72]] = MyLiveChat[a[72]] || a[73];
        MyLiveChat[a[74]] = MyLiveChat[a[74]] || a[75];
        MyLiveChat[a[76]] = MyLiveChat[a[3]](MyLiveChat[a[76]], 0);
        MyLiveChat[a[77]] = MyLiveChat[a[3]](MyLiveChat[a[77]], -100);
        MyLiveChat[a[78]] = MyLiveChat[a[78]] || a[79];
        MyLiveChat[a[80]] = MyLiveChat[a[80]] || a[81];
        MyLiveChat[a[82]] = MyLiveChat[a[82]] == a[14] ? true : false;
        MyLiveChat[a[83]] = MyLiveChat[a[84]] || a[85];
        MyLiveChat[a[86]] = MyLiveChat[a[87]] || a[88];
        MyLiveChat[a[89]] = MyLiveChat[a[3]](MyLiveChat[a[89]], 0);
        MyLiveChat[a[90]] = MyLiveChat[a[3]](MyLiveChat[a[90]], 1800);
        MyLiveChat[a[91]] = MyLiveChat[a[91]];
        MyLiveChat[a[92]] = MyLiveChat[a[92]];
        MyLiveChat[a[93]] = (a[31] != MyLiveChat[a[93]]);
        MyLiveChat[a[94]] = MyLiveChat[a[94]] || a[14];
        MyLiveChat[a[95]] = MyLiveChat[a[95]] || a[96];
        MyLiveChat[a[97]] = MyLiveChat[a[97]] || a[96];
        MyLiveChat[a[98]] = MyLiveChat[a[3]](MyLiveChat[a[98]], 0);
        MyLiveChat[a[99]] = MyLiveChat[a[3]](MyLiveChat[a[99]], 0);
        MyLiveChat[a[100]] = MyLiveChat[a[3]](MyLiveChat[a[100]], 0);
        MyLiveChat[a[101]] = MyLiveChat[a[3]](MyLiveChat[a[101]], 0);
        MyLiveChat[a[102]] = MyLiveChat[a[102]] || a[13];
        MyLiveChat[a[103]] = MyLiveChat[a[103]] || a[13];
        MyLiveChat[a[104]] = MyLiveChat[a[104]] || a[31];
        MyLiveChat[a[105]] = MyLiveChat[a[105]] || a[106];
        MyLiveChat[a[107]] = MyLiveChat[a[107]] || a[13];
        MyLiveChat[a[108]] = MyLiveChat[a[108]] || MyLiveChat[a[0]](a[109]) || a[63];
        MyLiveChat[a[110]] = MyLiveChat[a[110]] || MyLiveChat[a[0]](a[111]) || a[112];
        MyLiveChat[a[113]] = MyLiveChat[a[113]] || a[114];
        MyLiveChat[a[115]] = MyLiveChat[a[115]] || a[14];
        MyLiveChat[a[116]] = MyLiveChat[a[116]] || a[14];
        MyLiveChat[a[117]] = MyLiveChat[a[117]] || a[13];
        MyLiveChat[a[118]] = MyLiveChat[a[118]] || a[13];
        MyLiveChat[a[119]] = false;
        MyLiveChat[a[120]] = MyLiveChat[a[120]] == a[14];
        if (MyLiveChat[a[121]] == a[14]) {
            if (!MyLiveChat[a[122]]) {
                MyLiveChat[a[120]] = false
            }
        };
        MyLiveChat[a[123]] = MyLiveChat[a[123]] || a[14];
        MyLiveChat[a[124]] = MyLiveChat[a[124]] || a[13];
        MyLiveChat[a[125]] = MyLiveChat[a[125]] == a[14];
        MyLiveChat[a[126]] = MyLiveChat[a[126]] == a[14];
        MyLiveChat[a[127]] = MyLiveChat[a[127]] == a[14];
        MyLiveChat[a[128]] = MyLiveChat[a[128]] || a[129];
        MyLiveChat[a[130]] = MyLiveChat[a[130]] || a[129];
        MyLiveChat[a[131]] = MyLiveChat[a[3]](MyLiveChat[a[131]], 0);
        MyLiveChat[a[132]] = MyLiveChat[a[3]](MyLiveChat[a[132]], 0);
        MyLiveChat[a[133]] = MyLiveChat[a[3]](MyLiveChat[a[133]], 0);
        MyLiveChat[a[134]] = MyLiveChat[a[3]](MyLiveChat[a[134]], 0);
        MyLiveChat[a[135]] = MyLiveChat[a[3]](MyLiveChat[a[135]], 0);
        MyLiveChat[a[136]] = MyLiveChat[a[136]] || a[14];
        MyLiveChat[a[137]] = MyLiveChat[a[137]] || a[14];
        MyLiveChat[a[138]] = MyLiveChat[a[138]] || a[13];
        MyLiveChat[a[139]] = MyLiveChat[a[139]] || a[13];
        MyLiveChat[a[140]] = MyLiveChat[a[140]] || a[14];
        MyLiveChat[a[141]] = MyLiveChat[a[141]] || a[14];
        MyLiveChat[a[142]] = MyLiveChat[a[142]] || a[13];
        MyLiveChat[a[143]] = MyLiveChat[a[143]] || a[13];
        MyLiveChat[a[67]] = a[144];
        MyLiveChat[a[145]] = a[146] + MyLiveChat[a[68]] + a[147] + MyLiveChat[a[69]] + a[148];
        MyLiveChat[a[145]] += a[149] + Math[a[151]]((screen[a[150]] - MyLiveChat[a[68]]) / 2);
        MyLiveChat[a[145]] += a[152] + Math[a[151]]((screen[a[153]] - MyLiveChat[a[69]]) / 2);
        MyLiveChat[a[154]] = a[155];
        if (MyLiveChat[a[28]]) {
            if (MyLiveChat[a[30]] == a[31] && !MyLiveChat[a[34]] && !MyLiveChat[a[36]]) {
                MyLiveChat[a[28]] = false
            };
            if (MyLiveChat[a[30]] == a[14] && !MyLiveChat[a[38]] && !MyLiveChat[a[40]] && !MyLiveChat[a[42]] && !MyLiveChat[a[44]] && !MyLiveChat[a[46]] && !MyLiveChat[a[48]] && !MyLiveChat[a[50]]) {
                MyLiveChat[a[28]] = false
            }
        };
        MyLiveChat[a[156]] = MyLiveChat[a[156]] == a[14];
        MyLiveChat[a[157]] = MyLiveChat[a[157]] || MyLiveChat[a[0]](a[158]) || a[159];
        MyLiveChat[a[160]] = MyLiveChat[a[0]](a[161]) || a[63];
        MyLiveChat[a[162]] = MyLiveChat[a[0]](a[163]) || a[164];
        MyLiveChat[a[165]] = MyLiveChat[a[165]] || MyLiveChat[a[0]](a[166]) || a[167];
        MyLiveChat[a[168]] = MyLiveChat[a[0]](a[169]) || a[170];
        MyLiveChat[a[171]] = MyLiveChat[a[0]](a[172]) || a[173];
        MyLiveChat[a[174]] = MyLiveChat[a[174]] || a[175];
        MyLiveChat[a[176]] = MyLiveChat[a[176]] || a[13];
        MyLiveChat[a[177]] = MyLiveChat[a[177]] || a[14];
        MyLiveChat[a[178]] = MyLiveChat[a[178]] || MyLiveChat[a[0]](a[179]) || a[167];
        MyLiveChat[a[180]] = MyLiveChat[a[180]] || a[181];
        MyLiveChat[a[182]] = MyLiveChat[a[182]] != a[31];
        MyLiveChat[a[183]] = MyLiveChat[a[183]] == a[14];
        MyLiveChat[a[184]] = MyLiveChat[a[184]] != a[31];
        MyLiveChat[a[185]] = MyLiveChat[a[185]] == a[14];
        MyLiveChat[a[186]] = MyLiveChat[a[186]] == a[14];
        MyLiveChat[a[187]] = MyLiveChat[a[187]] == a[14];
        MyLiveChat[a[188]] = MyLiveChat[a[188]] == a[14];
        MyLiveChat[a[189]] = MyLiveChat[a[189]] == a[14];
        MyLiveChat[a[190]] = MyLiveChat[a[190]] || a[191];
        MyLiveChat[a[192]] = MyLiveChat[a[192]] || a[13];
        MyLiveChat[a[193]] = MyLiveChat[a[193]] || a[13];
        MyLiveChat[a[194]] = MyLiveChat[a[194]] || a[13];
        MyLiveChat[a[195]] = MyLiveChat[a[195]] || a[13];
        MyLiveChat[a[196]] = a[197];
        if (MyLiveChat[a[194]]) {
            MyLiveChat[a[196]] += a[198] + MyLiveChat[a[194]] + a[199]
        };
        if (MyLiveChat[a[195]]) {
            MyLiveChat[a[196]] += a[200] + MyLiveChat[a[195]] + a[199]
        };
        MyLiveChat[a[201]] = MyLiveChat[a[201]] || a[13];
        MyLiveChat[a[202]] = MyLiveChat[a[202]] || a[13];
        MyLiveChat[a[203]] = MyLiveChat[a[203]] || a[13];
        MyLiveChat[a[204]] = MyLiveChat[a[204]] != a[31];
        MyLiveChat[a[205]] = MyLiveChat[a[3]](MyLiveChat[a[205]], 36);
        MyLiveChat[a[206]] = MyLiveChat[a[3]](MyLiveChat[a[206]], 99999);
        MyLiveChat[a[207]] = MyLiveChat[a[3]](MyLiveChat[a[207]], 0);
        MyLiveChat[a[208]] = MyLiveChat[a[3]](MyLiveChat[a[208]], 0);
        MyLiveChat[a[209]] = MyLiveChat[a[3]](MyLiveChat[a[209]], 0);
        MyLiveChat[a[210]] = MyLiveChat[a[211]] != a[31];
        MyLiveChat[a[212]] = MyLiveChat[a[213]] != a[31];
        MyLiveChat[a[214]] = MyLiveChat[a[215]] != a[31];
        MyLiveChat[a[216]] = MyLiveChat[a[216]] || a[14];
        if (MyLiveChat[a[9]] && MyLiveChat[a[217]] && MyLiveChat[a[217]] != a[31]) {
            MyLiveChat[a[216]] = MyLiveChat[a[217]];
            MyLiveChat[a[100]] = 0;
            MyLiveChat[a[101]] = 0;
            MyLiveChat[a[120]] = false;
            MyLiveChat[a[204]] = false
        };
        n(a[218]);
        n(a[219]);
        n(a[220]);
        n(a[221]);
        n(a[222]);
        n(a[223]);
        n(a[224]);
        n(a[225]);
        n(a[177]);
        n(a[226]);
        o(a[136]);
        o(a[137]);
        o(a[140]);
        o(a[141]);
        o(a[227], a[61]);
        o(a[227], a[228]);
        o(a[123]);
        n(a[229], a[14], a[230]);
        n(a[231], a[14], a[230]);
        n(a[232], a[14], a[230]);
        if (MyLiveChat[a[233]]) {
            n(a[233], a[14], a[230])
        } else {
            MyLiveChat[a[233]] = MyLiveChat[a[232]]
        };
        n(a[234], a[14], a[230])
    }

    function n(e, b, c) {
        n[e] = a[235];
        if (MyLiveChat[e] == a[236] || MyLiveChat[e] == a[237]) {
            console[a[238]](e, MyLiveChat[e]);
            var g = MyLiveChat[a[8]] + a[239] + MyLiveChat[a[240]] + a[241] + e;
            if (MyLiveChat[e] == a[237]) {
                g += a[242]
            };
            MyLiveChat[e] = g + (c || a[243]);
            return
        };
        if (MyLiveChat[e] == a[244]) {
            if (MyLiveChat[e + a[245]]) {
                MyLiveChat[e] = MyLiveChat[e + a[245]];
                return
            };
            MyLiveChat[e] = null
        };
        var h = (MyLiveChat[e] || b || a[14]);
        if (h[a[247]](a[246]) != -1) {
            return
        };
        var f = a[248] + a[249] + a[250] + a[251] + a[252];
        var d = e + a[253] + h;
        if (!c && f[a[247]](a[254] + d[a[255]]() + a[254]) >= 0) {
            c = a[230]
        };
        MyLiveChat[e] = MyLiveChat[a[8]] + a[256] + d + (c || a[243])
    }

    function o(c, d) {
        if (!d) {
            d = a[13]
        };
        if (MyLiveChat[c + d] != a[244]) {
            MyLiveChat[c + a[245] + d] = MyLiveChat[a[8]] + a[256] + c + d + a[253] + (MyLiveChat[c + d] || a[14]) + a[230];
            if (c == a[123]) {
                var b = (MyLiveChat[c + d] || a[14]);
                if (b == a[257] || b == a[258] || b == a[71]) {
                    b = MyLiveChat[a[122]] ? a[259] + b : a[260] + b;
                    MyLiveChat[c + a[245] + d] = MyLiveChat[a[8]] + a[256] + c + d + a[253] + b + a[230]
                }
            }
        }
    }

    function p() {
        MyLiveChat[a[261]] = MyLiveChat[a[3]](MyLiveChat[a[262]], 1);
        MyLiveChat[a[263]] = MyLiveChat[a[3]](MyLiveChat[a[264]], 1);
        MyLiveChat[a[265]] = MyLiveChat[a[3]](MyLiveChat[a[266]], 1);
        MyLiveChat[a[182]] = MyLiveChat[a[184]];
        MyLiveChat[a[267]] = MyLiveChat[a[268]] != a[31];
        MyLiveChat[a[269]] = MyLiveChat[a[270]] != a[31];
        MyLiveChat[a[271]] = MyLiveChat[a[272]] != a[31];
        MyLiveChat[a[273]] = MyLiveChat[a[274]] != a[31];
        MyLiveChat[a[275]] = MyLiveChat[a[276]] != a[31];
        MyLiveChat[a[277]] = MyLiveChat[a[278]] != a[31];
        MyLiveChat[a[279]] = MyLiveChat[a[280]] != a[31];
        MyLiveChat[a[281]] = MyLiveChat[a[282]] != a[31];
        MyLiveChat[a[283]] = MyLiveChat[a[284]] != a[31];
        MyLiveChat[a[285]] = MyLiveChat[a[286]] != a[31];
        MyLiveChat[a[287]] = MyLiveChat[a[288]] != a[31];
        MyLiveChat[a[289]] = MyLiveChat[a[290]] != a[31];
        MyLiveChat[a[291]] = MyLiveChat[a[292]] != a[31];
        MyLiveChat[a[293]] = MyLiveChat[a[294]] != a[31];
        MyLiveChat[a[295]] = MyLiveChat[a[296]] != a[31];
        MyLiveChat[a[297]] = MyLiveChat[a[298]] != a[31];
        MyLiveChat[a[299]] = MyLiveChat[a[300]] != a[31];
        MyLiveChat[a[301]] = MyLiveChat[a[302]];
        MyLiveChat[a[303]] = MyLiveChat[a[304]]
    }

    function q() {
        if (MyLiveChat[a[306]][a[305]]) {
            bL(MyLiveChat[a[306]][a[305]])
        } else {
            bL(MyLiveChat[a[307]])
        };
        if (MyLiveChat[a[309]][a[308]]) {
            MyLiveChat[a[310]] = MyLiveChat[a[309]][a[308]]
        };
        if (MyLiveChat[a[309]][a[311]]) {
            var j = MyLiveChat[a[305]];
            bL(MyLiveChat[a[309]][a[311]]);
            var d = MyLiveChat[a[305]];
            for (var e = 0; e < d[a[312]]; e++) {
                var f = d[e];
                for (var g = 0; g < j[a[312]]; g++) {
                    var h = j[g];
                    if (f[a[313]] != h[a[313]]) {
                        continue
                    };
                    for (var k in h) {
                        if (typeof(f[k]) == a[314]) {
                            f[k] = h[k]
                        }
                    }
                }
            }
        };
        if (MyLiveChat[a[9]]) {};
        if (MyLiveChat[a[122]] && MyLiveChat[a[310]] && (MyLiveChat[a[315]] == a[316] || MyLiveChat[a[315]] == a[317]) && MyLiveChat[a[318]] != a[319]) {
            for (var c = 0; c < MyLiveChat[a[320]][a[312]]; c++) {
                var b = MyLiveChat[a[320]][c];
                if (b[a[321]] == MyLiveChat[a[310]]) {
                    if (!b[a[61]]) {
                        MyLiveChat[a[122]] = false
                    }
                }
            }
        }
    }

    function r() {
        if (!MyLiveChat[a[28]]) {
            return
        };
        var e = parseInt(0 - new Date()[a[322]]() / 60);
        var d = new Date(new Date()[a[323]]() + (MyLiveChat[a[32]] - e) * 60 * 60 * 1000);
        var b = d[a[324]]();
        var c = d[a[325]]();
        var j = [];
        var g = d[a[326]]();
        if (MyLiveChat[a[30]] == a[31]) {
            if ((g > 0 || g < 6) && MyLiveChat[a[34]] && MyLiveChat[a[35]]) {
                j = MyLiveChat[a[35]][a[328]](a[327])
            };
            if ((g == 0 || g == 6) && MyLiveChat[a[36]] && MyLiveChat[a[37]]) {
                j = MyLiveChat[a[37]][a[328]](a[327])
            }
        } else {
            if (MyLiveChat[a[329] + g] && MyLiveChat[a[330] + g]) {
                j = MyLiveChat[a[330] + g][a[328]](a[327])
            }
        };
        if (j[a[312]] == 0) {
            return
        };
        var f = b * 60 + c;
        var k = parseInt(j[0][a[328]](a[331])[0]) * 60 + parseInt(j[0][a[328]](a[331])[1]);
        var h = parseInt(j[1][a[328]](a[331])[0]) * 60 + parseInt(j[1][a[328]](a[331])[1]);
        if (f < k || f > h) {
            return false
        };
        return true
    }

    function s() {
        if (MyLiveChat[a[332]] || MyLiveChat[a[333]]) {
            return
        };
        if (window[a[332]]) {
            if (MyLiveChat[a[12]]) {
                MyLiveChat[a[332]] = window[a[334]]
            } else {
                MyLiveChat[a[332]] = window[a[332]]
            };
            return
        };
        if (/MSIE [678]\./ [a[11]](navigator[a[10]])) {
            b()
        };

        function b() {
            if (!document[a[335]]) {
                return setTimeout(b, 1)
            };
            var c = document[a[337]](a[336]);
            c[a[340]](a[338], a[339]);
            document[a[335]][a[342]](c, document[a[335]][a[341]]);
            MyLiveChat[a[333]] = c;
            MyLiveChat[a[333]][a[344]][a[343]] = a[345]
        }
    }

    function t(b) {
        try {
            if (MyLiveChat[a[333]] == null) {
                return false
            };
            MyLiveChat[a[333]][a[347]](a[346] + MyLiveChat[a[240]] + a[327] + b);
            return true
        } catch (x) {
            return false
        }
    }

    function u() {
        if (MyLiveChat[a[332]]) {
            return a[332]
        };
        if (t(a[348])) {
            return a[333]
        }
    }

    function v(d) {
        if (MyLiveChat[a[12]]) {
            return window[a[349]] && window[a[349]][d]
        };
        var b = document[a[350]][a[328]](a[199]);
        for (var c = 0; c < b[a[312]]; c++) {
            var e = b[c][a[328]](a[351]);
            if (d == e[0][a[7]](/\s/g, a[13])) {
                return unescape(e[1])
            }
        }
    }

    function w(d, f, e) {
        if (MyLiveChat[a[12]]) {
            if (!window[a[349]]) {
                window[a[349]] = {}
            };
            window[a[349]][d] = f;
            return
        };
        var b = d + a[351] + escape(f) + a[352];
        if (e) {
            var c = new Date();
            c[a[354]](c[a[353]]() + e);
            b += a[355] + c[a[356]]() + a[199]
        };
        document[a[350]] = b
    }

    function y(d) {
        if (t(d)) {
            var c = MyLiveChat[a[333]][a[358]](a[357]);
            if (c != d) {
                return null
            };
            var e = MyLiveChat[a[333]][a[358]](a[359]);
            var b = MyLiveChat[a[333]][a[358]](a[360]);
            if (b && new Date()[a[323]]() > parseInt(b)) {
                return null
            };
            return e
        };
        if (MyLiveChat[a[332]]) {
            var e = MyLiveChat[a[332]][a[362]](a[361] + MyLiveChat[a[240]] + a[327] + d);
            var b = MyLiveChat[a[332]][a[362]](a[363] + MyLiveChat[a[240]] + a[327] + d);
            if (b && new Date()[a[323]]() > b) {
                return null
            };
            return e
        };
        return v(d)
    }

    function z(b, d, c) {
        if (t(b)) {
            MyLiveChat[a[333]][a[340]](a[357], b);
            if (d) {
                MyLiveChat[a[333]][a[340]](a[359], d)
            } else {
                MyLiveChat[a[333]][a[364]](a[359])
            };
            if (c) {
                MyLiveChat[a[333]][a[340]](a[360], String(new Date()[a[323]]() + c * 1000))
            } else {
                MyLiveChat[a[333]][a[364]](a[360])
            };
            MyLiveChat[a[333]][a[366]](a[365] + MyLiveChat[a[240]] + a[327] + b);
            return
        };
        if (MyLiveChat[a[332]]) {
            if (d) {
                MyLiveChat[a[332]][a[367]](a[361] + MyLiveChat[a[240]] + a[327] + b, d)
            } else {
                MyLiveChat[a[332]][a[368]](a[361] + MyLiveChat[a[240]] + a[327] + b)
            };
            if (c) {
                MyLiveChat[a[332]][a[367]](a[363] + MyLiveChat[a[240]] + a[327] + b, String(new Date()[a[323]]() + c * 1000))
            } else {
                MyLiveChat[a[332]][a[368]](a[363] + MyLiveChat[a[240]] + a[327] + b)
            };
            return
        };
        w(b, d, c)
    }

    function A() {
        var b = false;
        if (!MyLiveChat[a[369]] || MyLiveChat[a[369]] == a[370] || MyLiveChat[a[369]] == a[314]) {
            MyLiveChat[a[369]] = y(a[369]);
            if (MyLiveChat[a[369]]) {
                if (MyLiveChat[a[369]][a[371]](32) == MyLiveChat[a[372]][a[371]](32)) {
                    b = false
                } else {
                    try {
                        console[a[238]](a[373] + MyLiveChat[a[369]])
                    } catch (x) {};
                    MyLiveChat[a[369]] = null
                }
            }
        };
        if (!MyLiveChat[a[369]] || MyLiveChat[a[369]] == a[370] || MyLiveChat[a[369]] == a[314]) {
            MyLiveChat[a[369]] = MyLiveChat[a[372]];
            b = true
        };
        return b
    }

    function B() {
        var b = MyLiveChat[a[374]];
        for (var c = 0; c < b[a[312]]; c++) {
            z(a[375] + b[c], L(MyLiveChat[b[c]]))
        };
        z(a[376], String(new Date()[a[323]]()));
        z(a[377], String(MyLiveChat[a[378]]));
        z(a[379], String(MyLiveChat[a[378]]))
    }

    function C(f, k) {
        if (!f) {
            return true
        };
        if (!k) {
            return false
        };
        if (f[a[371]](0, 7) == a[380]) {
            try {
                var j = new RegExp(f[a[371]](7), a[381]);
                return j[a[11]](k)
            } catch (x) {
                return false
            }
        };
        var g = f[a[328]](a[254]);
        if (g[a[312]] > 1) {
            for (var h = 0; h < g[a[312]]; h++) {
                if (C(g[h], k)) {
                    return true
                }
            };
            return false
        } else {
            f = f[a[255]]();
            k = k[a[255]]();
            var e = f[a[328]](a[382]);
            var c = 0;
            for (var b = 0; b < e[a[312]]; b++) {
                var d = e[b];
                if (!d[a[312]]) {
                    continue
                };
                c = k[a[247]](d, c);
                if (c == -1) {
                    return false
                };
                c += d[a[312]]
            };
            return true
        }
    }

    function D(b) {
        if (!b) {
            return a[13]
        };
        return b[a[7]](/&/g, a[388])[a[7]](/</g, a[387])[a[7]](/>/g, a[386])[a[7]](/\x22/g, a[385])[a[7]](/\x27/g, a[384])[a[7]](/\n/g, a[383])[a[7]](/\r/g, a[13])
    }

    function E(b, c) {
        if (window[a[389]]) {
            window[a[389]](b, c)
        };
        if (MyLiveChat[a[390]] && MyLiveChat[a[390]][a[389]]) {
            MyLiveChat[a[390]][a[389]](b, c)
        }
    }

    function F(d, e) {
        if (y(a[391]) == a[14]) {
            return
        };
        if (d[a[247]](a[241]) == -1) {
            d = MyLiveChat[a[392]] + a[393] + d + a[394]
        };
        if (window[a[395]]) {
            var b = new window[a[395]]();
            b[a[396]] = true;
            b[a[397]] = d;
            if (e) {
                b[a[398]] = parseInt(e || a[31]) / 100
            };
            document[a[335]][a[342]](b, document[a[335]][a[341]]);
            return
        };
        if (/MSIE/ [a[11]](navigator[a[10]])) {
            var c = document[a[337]](a[399]);
            c[a[397]] = d;
            if (e) {
                c[a[398]] = (parseInt(e || a[31]) - 100) * 50
            };
            document[a[335]][a[342]](c, document[a[335]][a[341]]);
            return
        }
    }

    function G() {
        MyLiveChat[a[400]] = new Date()[a[323]]();
        MyLiveChat[a[401]] = 18000 * (1 + Math[a[402]]());
        H(MyLiveChat[a[401]])
    }

    function H(b) {
        if (MyLiveChat[a[403]] || MyLiveChat[a[404]]) {
            return
        };
        if (b) {
            MyLiveChat[a[405]] = MyLiveChat[a[400]] + b
        };
        clearTimeout(MyLiveChat[a[406]]);
        MyLiveChat[a[406]] = setTimeout(I, 555)
    }

    function I() {
        var d = new Date()[a[323]]();
        if (d < MyLiveChat[a[405]]) {
            H();
            return
        };
        if (!MyLiveChat[a[407]] && !MyLiveChat[a[408]]) {
            P(a[409]);
            return
        };
        if (!(MyLiveChat[a[332]] || MyLiveChat[a[333]])) {
            P(a[409]);
            return
        };
        var b = parseInt(y(a[377]));
        if (MyLiveChat[a[378]] == b) {
            if (b == parseInt(y(a[379]))) {
                P(a[409]);
                return
            };
            if (d - MyLiveChat[a[408]] > MyLiveChat[a[401]] * 1.8) {
                P(a[409]);
                return
            };
            H();
            return
        };
        z(a[379], String(MyLiveChat[a[378]]));
        var c = parseInt(y(a[376]));
        if (!c || d - c > MyLiveChat[a[401]] - 1800) {
            P(a[409]);
            return
        };
        H(MyLiveChat[a[401]]);
        J();
        MyLiveChat[a[410]] = setTimeout(function() {
            if (c != parseInt(y(a[376]))) {
                J()
            }
        }, MyLiveChat[a[401]] / 2)
    }

    function J() {
        var b = MyLiveChat[a[374]];
        for (var c = 0; c < b[a[312]]; c++) {
            MyLiveChat[b[c]] = K(y(a[375] + b[c]))
        };
        X(true)
    }

    function K(c) {
        if (!c) {
            return null
        };
        if (c == a[370]) {
            return null
        };
        if (c == a[411]) {
            return true
        };
        if (c == a[412]) {
            return false
        };
        var b = c[a[371]](0, 2);
        c = c[a[371]](2);
        if (b == a[413]) {
            return c
        };
        if (b == a[414]) {
            return parseFloat(c)
        };
        if (b == a[415]) {
            return c[a[328]](a[416])
        };
        return null
    }

    function L(c) {
        if (c == null) {
            return a[370]
        };
        var b = typeof(c);
        if (b == a[417]) {
            return c ? a[411] : a[412]
        };
        if (b == a[418]) {
            return a[413] + c
        };
        if (b == a[419]) {
            return a[414] + c
        };
        if (c instanceof Array) {
            return a[415] + c[a[420]](a[416])
        };
        return null
    }

    function M() {
        return window[a[422]][a[421]]
    }

    function N() {
        var c = document[a[423]];
        if (!c) {
            return y(a[423]) || a[13]
        };
        var b = window[a[422]][a[421]][a[328]](a[424])[1][a[328]](a[241])[0];
        var d = c[a[328]](a[424])[1][a[328]](a[241])[0];
        if (b == d) {
            return a[13]
        };
        z(a[423], c);
        return c
    }

    function O(m) {
        var k = parseInt(y(a[425])) || 0;
        var l = Math[a[151]]((new Date()[a[323]]() - k) / 1000);
        l = Math[a[427]](1, Math[a[426]](l, 3600 * 24 * 30));
        var e = a[428] + l + a[429] + (y(a[430]) || a[431]) + a[429] + (MyLiveChat[a[432]] || a[13]);
        var j = document[a[433]];
        if (j && j[a[312]] > 50) {
            j = j[a[371]](0, 50) + a[434]
        };
        var h = MyLiveChat[a[307]] || a[13];
        var d = MyLiveChat[a[305]];
        if (d && d[a[312]]) {
            var b = [];
            for (var g = 0; g < d[a[312]]; g++) {
                var c = d[g];
                b[g] = {
                    text: c[a[313]]
                };
                if (c[a[435]]) {
                    b[g][a[435]] = c[a[435]]
                };
                if (c[a[436]] && String(c[a[436]])[a[312]] < 200) {
                    b[g][a[436]] = c[a[436]]
                }
            };
            h = bb(b)
        };
        var f = window[a[437]] || escape;
        m = m + a[438] + f(y(a[439]) || a[13]) + a[440] + f(MyLiveChat[a[441]] || a[13]) + a[442] + f(MyLiveChat[a[443]] || a[13]) + a[444] + f(MyLiveChat[a[445]] || a[13]) + a[446] + f(MyLiveChat[a[310]] || a[13]) + a[447] + f(M()) + a[448] + f(N()) + a[449] + f(MyLiveChat[a[450]] || a[13]) + a[451] + f(MyLiveChat[a[452]] || a[13]) + a[453] + f(h) + a[454] + f(MyLiveChat[a[455]] || a[13]) + a[456] + f(MyLiveChat[a[457]] || a[13]) + a[458] + f(e) + a[459] + (screen[a[460]] + a[254] + screen[a[461]]) + a[462] + f(j) + a[463] + l + MyLiveChat[a[464]];
        if (MyLiveChat[a[465]]) {
            m = m + a[466] + f(MyLiveChat[a[465]][a[467]]);
            MyLiveChat[a[465]] = null
        };
        while (m[a[469]](/\&[a-z]+\=\&/ig)) {
            m = m[a[7]](/\&[a-z]+\=\&/ig, a[468])
        };
        return m
    }

    function P(b) {
        var f = a[470];
        var e = document[a[471]](f);
        if (e == null) {
            e = document[a[337]](a[472]);
            var d = document[a[474]](a[473])[0] || document[a[335]];
            d[a[342]](e, d[a[341]])
        };
        A();
        var g = MyLiveChat[a[392]] + a[475] + MyLiveChat[a[240]] + a[476] + MyLiveChat[a[369]] + a[477] + b;
        if (b == a[409] && MyLiveChat[a[478]]) {
            if (MyLiveChat[a[479]]) {
                g += a[480] + encodeURIComponent(MyLiveChat[a[479]])
            } else {
                g += a[481]
            }
        };
        g = O(g);
        var c = document[a[337]](a[472]);
        c[a[482]] = f;
        c[a[397]] = g;
        MyLiveChat[a[408]] = new Date()[a[323]]();
        clearTimeout(MyLiveChat[a[483]]);
        MyLiveChat[a[483]] = setTimeout(function() {
            if (MyLiveChat[a[400]] && MyLiveChat[a[400]] > MyLiveChat[a[408]]) {
                return
            };
            G()
        }, 48000);
        e[a[485]][a[484]](c, e)
    }

    function Q(c, b) {
        if (b != a[486] && !MyLiveChat[a[122]] && MyLiveChat[a[487]] == a[488] && MyLiveChat[a[489]]) {
            return MyLiveChat[a[489]]
        };
        var d = MyLiveChat[a[490]] || (MyLiveChat[a[5]] + a[491]);
        d = d[a[328]](a[492])[0];
        d += d[a[247]](a[493]) == -1 ? a[493] : a[468];
        A();
        d = d + a[494] + MyLiveChat[a[240]] + a[476] + MyLiveChat[a[369]] + a[495] + (c || a[496]) + a[497] + (b || (MyLiveChat[a[403]] ? a[498] : a[499]));
        d = O(d);
        return d
    }

    function R(b) {
        if (b == a[500] && MyLiveChat[a[125]]) {
            if (MyLiveChat[a[501]] != a[502]) {
                return true
            }
        };
        if (!MyLiveChat[a[503]]()) {
            return
        };
        if (b == a[504] || b == a[505]) {
            return
        };
        if (MyLiveChat[a[9]]) {
            var d = MyLiveChat[a[306]][a[506]];
            if (d == a[507] || !d) {
                return
            };
            return true
        };
        if (!b) {
            b = a[508]
        };
        var c = MyLiveChat[b + a[509]];
        if (!c) {
            if (b == a[510]) {
                return true
            }
        };
        if (c == a[502]) {
            return false
        };
        return true
    }

    function S(b) {
        MyLiveChat[a[511]]();
        if (R(b)) {
            if (MyLiveChat[a[512]]()) {
                MyLiveChat[a[513]]()
            } else {
                MyLiveChat[a[514]]()
            }
        } else {
            if (MyLiveChat[a[9]]) {
                return window[a[516]](Q(b), a[515])
            } else {
                return window[a[516]](Q(b), a[515], MyLiveChat[a[145]])
            }
        }
    }

    function T() {
        if (!MyLiveChat[a[517]] || !MyLiveChat[a[518]]) {
            return
        };
        if (MyLiveChat[a[125]]) {
            if (MyLiveChat[a[512]]()) {
                MyLiveChat[a[517]][a[519]]()
            } else {
                MyLiveChat[a[517]][a[520]]()
            }
        };
        if (MyLiveChat[a[126]]) {
            if (MyLiveChat[a[512]]()) {
                MyLiveChat[a[518]][a[520]]()
            } else {
                MyLiveChat[a[518]][a[519]]()
            }
        }
    }

    function U(c) {
        if (!document[a[335]]) {
            setTimeout(function() {
                U(c)
            }, 100);
            return
        };

        function b() {
            if (!MyLiveChat[a[122]] && MyLiveChat[a[487]] == a[521]) {
                return
            };
            if (MlcBuidinWidget[a[522]] != null && MlcBuidinWidget[a[522]] == MyLiveChat[a[122]]) {
                return
            };
            MyLiveChat[a[518]] = MlcBuidinWidget[a[523]]();
            setInterval(T, 100)
        }
        b();
        setInterval(function() {
            b()
        }, 1000)
    }

    function V(e, c) {
        var b = window[e];
        if (document[a[524]]) {
            b = document[a[524]](a[492] + e)
        };
        if (b && b[a[312]]) {
            for (var d = 0; d < b[a[312]]; d++) {
                c(b[d])
            };
            return b
        } else {
            if (b) {
                c(b);
                return [b]
            }
        };
        return []
    }

    function W(b, d) {
        var c = V(a[525], function(b) {
            b[a[526]] = d
        });
        if (c[a[312]] == 0) {
            MyLiveChat_DocWrite(d, MyLiveChat[b + a[527]])
        }
    }

    function X(d) {
        if (MyLiveChat[a[9]] && MyLiveChat[a[15]]) {
            return
        };
        MyLiveChat[a[400]] = new Date()[a[323]]();
        try {
            if (parent[a[528]]) {
                return
            }
        } catch (x) {};
        if (MyLiveChat[a[403]] || MyLiveChat[a[404]]) {
            E(a[529]);
            E(a[530]);
            for (var f = 0; f < MyLiveChat[a[531]][a[312]]; f++) {
                var e = MyLiveChat[a[531]][f];
                e(e)
            };
            return
        };
        if (MyLiveChat[a[28]]) {
            var g = r();
            if (g == true) {
                MyLiveChat[a[122]] = true
            } else {
                if (g === false && MyLiveChat[a[29]]) {
                    MyLiveChat[a[122]] = false
                }
            }
        };
        if (!MyLiveChat[a[532]]) {
            if (window[a[533]]) {
                window[a[533]](MyLiveChat)
            };
            MyLiveChat[a[532]] = true
        };
        E(a[529]);
        if (!MyLiveChat[a[534]]) {
            H(MyLiveChat[a[535]])
        } else {
            if (MyLiveChat[a[534]] == a[409]) {
                var h = MyLiveChat[a[401]];
                if (MyLiveChat[a[408]] && !d) {
                    h += (new Date()[a[323]]() - MyLiveChat[a[408]]) * 2;
                    if (h > 23000) {
                        h = 23000
                    }
                };
                h *= 0.9 + Math[a[402]]() / 5;
                H(h)
            }
        };
        if (MyLiveChat[a[534]] == a[409]) {
            if (MyLiveChat[a[536]] == a[537]) {
                var j = MyLiveChat[a[538]][a[247]](a[254]);
                var c = MyLiveChat[a[538]][a[371]](0, j);
                var b = MyLiveChat[a[538]][a[371]](j + 1);
                if (b) {
                    MyLiveChat[a[80]] = b
                };
                MyLiveChat[a[539]] = MyLiveChat[a[540]];
                MyLiveChat[a[541]] = c;
                MyLiveChat[a[542]] = MyLiveChat[a[80]] = MyLiveChat[a[80]][a[328]](a[543])[a[420]](c);
                if (MyLiveChat[a[82]]) {
                    MyLiveChat[a[222]] = MyLiveChat[a[392]] + a[544] + MyLiveChat[a[240]] + a[545] + encodeURIComponent(c)
                };
                bU()
            } else {
                if (MyLiveChat[a[546]] != a[547]) {
                    bV()
                }
            }
        };
        if (MyLiveChat[a[534]] == a[548]) {
            if (MyLiveChat[a[536]] == a[549]) {
                bX()
            };
            if (MyLiveChat[a[536]] == a[550]) {};
            if (MyLiveChat[a[536]] == a[551]) {}
        };
        E(a[530]);
        MyLiveChat[a[552]] = MyLiveChat[a[122]] ? MyLiveChat[a[218]] : MyLiveChat[a[219]];
        MyLiveChat[a[553]] = MyLiveChat[a[122]] ? MyLiveChat[a[52]] : MyLiveChat[a[53]];
        MyLiveChat[a[554]] = MyLiveChat[a[122]] ? MyLiveChat[a[56]] : MyLiveChat[a[58]];
        MyLiveChat[a[555]] = MyLiveChat[a[122]] ? MyLiveChat[a[54]] : MyLiveChat[a[55]];
        MyLiveChat[a[556]] = MyLiveChat[a[122]] ? MyLiveChat[a[60]] : MyLiveChat[a[62]];
        MyLiveChat[a[557]] = MyLiveChat[a[122]] ? MyLiveChat[a[64]] : MyLiveChat[a[65]];
        MyLiveChat[a[558]] = MyLiveChat[a[122]] ? MyLiveChat[a[220]] : MyLiveChat[a[221]];
        for (var f = 0; f < MyLiveChat[a[531]][a[312]]; f++) {
            var e = MyLiveChat[a[531]][f];
            e(e)
        }
    }

    function Y(b, e) {
        if (b == a[559] || b == a[560] || b == a[561] || b == a[562] || b == a[563]) {
            bQ()
        };
        var f = MyLiveChat[a[487]] == a[521] ? (MyLiveChat[a[122]] ? a[13] : a[564]) : a[13];
        var d = f ? (a[565] + f + a[199]) : a[13];
        if (!MyLiveChat[a[534]]) {
            if (e[a[566]]) {
                return
            };
            e[a[566]] = true;
            if (MyLiveChat[a[567]] && b == a[559]) {
                W(b, a[568] + MyLiveChat[a[552]] + a[569] + D(MyLiveChat[a[553]]) + a[570] + d + a[571]);
                MyLiveChat[a[572]] = MyLiveChat[a[552]]
            };
            if (MyLiveChat[a[573]] && b == a[560]) {
                W(b, a[574] + D(MyLiveChat[a[555]]) + a[575] + d + a[571] + MyLiveChat[a[554]] + a[576]);
                MyLiveChat[a[577]] = MyLiveChat[a[554]]
            };
            if (MyLiveChat[a[578]] && b == a[561]) {
                W(b, a[579]);
                bT(f)
            };
            if (b == a[580]) {
                bS()
            };
            if (b == a[562]) {
                U()
            }
        } else {
            if (b == a[559]) {
                if (MyLiveChat[a[572]] != MyLiveChat[a[552]]) {
                    V(a[581], function(b) {
                        b[a[344]][a[582]] = f;
                        b[a[340]](a[433], MyLiveChat[a[553]] || a[13]);
                        b[a[340]](a[397], MyLiveChat[a[552]])
                    });
                    MyLiveChat[a[572]] = MyLiveChat[a[552]]
                }
            };
            if (b == a[560]) {
                if (MyLiveChat[a[577]] != MyLiveChat[a[554]]) {
                    V(a[583], function(b) {
                        b[a[344]][a[582]] = f;
                        b[a[340]](a[433], MyLiveChat[a[555]] || a[13]);
                        b[a[526]] = MyLiveChat[a[554]]
                    });
                    MyLiveChat[a[577]] = MyLiveChat[a[554]]
                }
            };
            if (b == a[561]) {
                var c = document[a[471]](a[584]);
                if (c) {
                    bT(f)
                }
            }
        }
    }

    function Z(b) {
        bL(ba(MyLiveChat[a[307]], b))
    }

    function ba(g, b) {
        if (!g) {
            return b
        };
        var h = null;
        try {
            if (g instanceof Array) {
                h = g[a[585]]()
            } else {
                h = eval(a[586] + g)
            }
        } catch (x) {};
        if (!h && g) {
            h = [{
                text: a[587],
                value: g
            }]
        };
        var f = null;
        try {
            if (b instanceof Array) {
                f = b[a[585]]()
            } else {
                f = eval(a[586] + b)
            }
        } catch (x) {};
        if (!f && b) {
            f = [{
                text: a[587],
                value: b
            }]
        };
        for (var d = 0; d < f[a[312]]; d++) {
            var j = f[d][a[313]];
            var c = false;
            for (var e = 0; e < h[a[312]]; e++) {
                if (h[e][a[313]] == j) {
                    h[e] = f[d];
                    c = true;
                    break
                }
            };
            if (!c) {
                h[a[588]](f[d])
            }
        };
        return bb(h)
    }

    function bb(d) {
        var e = [];

        function b(f) {
            switch (typeof(f)) {
                case a[314]:
                    ;
                case a[589]:
                    e[a[588]](a[370]);
                    return;
                case a[418]:
                    e[a[588]](a[590]);
                    e[a[588]](f[a[7]](/[^A-Za-z0-9\~\`\!\@\#\$\%\^\*\(\)\_\+\-\=\[\]\{\}\;\:\,\.\/\?\|]/g, function(b, c, d) {
                        var e = b[a[592]](0)[a[591]](16);
                        while (e[a[312]] < 4) {
                            if (e[a[312]] == 2) {
                                return a[593] + e
                            };
                            e = a[31] + e
                        };
                        return a[594] + e
                    }));
                    e[a[588]](a[590]);
                    return;
                case a[419]:
                    e[a[588]](f);
                    return;
                case a[417]:
                    e[a[588]](f ? a[411] : a[412]);
                    return
            };
            if (!f) {
                e[a[588]](a[370]);
                return
            };
            if (f[a[595]] == Object) {
                e[a[588]](a[596]);
                var d = 0;
                for (var g in f) {
                    if (d > 0) {
                        e[a[588]](a[254])
                    };
                    d++;
                    b(g);
                    e[a[588]](a[331]);
                    b(f[g])
                };
                e[a[588]](a[597])
            } else {
                if (f instanceof Array) {
                    e[a[588]](a[598]);
                    for (var c = 0; c < f[a[312]]; c++) {
                        if (c > 0) {
                            e[a[588]](a[254])
                        };
                        b(f[c])
                    };
                    e[a[588]](a[599])
                } else {
                    if (f instanceof Date) {
                        e[a[588]](a[600] + f[a[323]]() + a[601])
                    } else {
                        if (f instanceof RegExp) {
                            e[a[588]](a[241]);
                            e[a[588]](f[a[602]]);
                            e[a[588]](a[241]);
                            if (f[a[603]]) {
                                e[a[588]](a[604])
                            };
                            if (f[a[605]]) {
                                e[a[588]](a[606])
                            };
                            if (f[a[607]]) {
                                e[a[588]](a[608])
                            }
                        } else {
                            e[a[588]](a[370])
                        }
                    }
                }
            }
        }
        b(d);
        var c = e[a[420]](a[13]);
        eval(a[586] + c);
        return c
    }

    function bc(d) {
        if (d[a[609]]) {
            return false
        };
        if (d[a[610]]) {
            for (var c = 0; c < MyLiveChat[a[320]][a[312]]; c++) {
                var b = MyLiveChat[a[320]][c];
                if (b[a[321]][a[255]]() != d[a[610]][a[255]]()) {
                    continue
                };
                if (!b[a[61]]) {
                    return false
                };
                break
            }
        };
        var e = parseInt(d[a[611]]);
        if (e && e > 0 && new Date()[a[323]]() - MyLiveChat[a[378]] < e * 1000) {
            return false
        };
        if (!C(d[a[612]], document[a[612]])) {
            return false
        };
        if (!C(d[a[613]], location[a[421]])) {
            return false
        };
        if (!C(d[a[614]], MyLiveChat[a[615]])) {
            return false
        };
        if (!C(d[a[616]], MyLiveChat[a[617]])) {
            return false
        };
        MyLiveChat[a[618]] = d[a[610]] || MyLiveChat[a[310]];
        MyLiveChat[a[542]] = d[a[467]];
        z(a[619], d[a[620]] ? a[31] : a[14]);
        z(a[542], d[a[467]]);
        z(a[618], d[a[610]]);
        return true
    }

    function bd(c, e, f) {
        if (!c) {
            return
        };
        var d = e[0] == a[621];
        if (d) {
            e = e[a[371]](1)
        };
        if (!f || f == a[382]) {
            return d ? false : true
        };
        c = c[a[255]]();
        f = f[a[255]]();
        var b = false;
        switch (e) {
            case a[622]:
                b = c[a[247]](f) != -1;
                break;
            case a[623]:
                b = c == f;
                break;
            case a[624]:
                b = c[a[247]](f) == 0;
                break;
            case a[625]:
                b = c[a[247]](f) == c[a[312]] - f[a[312]];
                break
        };
        if (b) {
            return !d
        };
        return d
    }

    function be(e) {
        if (e[a[609]]) {
            return
        };
        if (e[a[626]] < 1) {
            e[a[626]] = e[a[627]][a[312]]
        };
        var d = 0;
        for (var b = 0; b < e[a[627]][a[312]]; b++) {
            var c = e[a[627]][b];
            switch (c[a[632]]) {
                case a[630]:
                    if (bd(location[a[421]][a[328]](a[492])[0], c[a[628]], c[a[629]][0])) {
                        d++
                    };
                    break;
                case a[631]:
                    if (bd(MyLiveChat[a[615]], c[a[628]], c[a[629]][0])) {
                        d++
                    };
                    break;
                case a[422]:
                    if (bd(MyLiveChat[a[615]], c[a[628]], c[a[629]][0])) {
                        d++
                    };
                    break
            };
            if (d >= e[a[626]]) {
                return true
            };
            if (d + (e[a[627]][a[312]] - b - 2) < e[a[626]]) {
                return false
            }
        }
    }

    function bf(d) {
        if (!MyLiveChat[a[633]]) {
            return
        };
        var b;
        var f;
        try {
            f = eval(a[586] + MyLiveChat[a[633]])
        } catch (x) {};
        if (!f || !f[a[312]]) {
            return
        };
        for (var g = 0; g < f[a[312]]; g++) {
            var h = f[g];
            if (be(h)) {
                for (var e = 0; e < h[a[634]][a[312]]; e++) {
                    var c = h[a[634]][e];
                    if (d == c[a[338]]) {
                        return true
                    }
                }
            }
        }
    }

    function bg() {
        if (bf(a[635])) {
            return true
        };
        var b;
        var c;
        try {
            c = eval(a[586] + MyLiveChat[a[636]])
        } catch (x) {};
        if (!c || !c[a[312]]) {
            return
        };
        for (var d = 0; d < c[a[312]]; d++) {
            if (bc(c[d])) {
                return true
            }
        }
    }

    function bh() {
        if (MyLiveChat[a[637]]) {
            return 1
        };
        if (!MyLiveChat[a[122]]) {
            return 2
        };
        if (MyLiveChat[a[512]]()) {
            return 3
        };
        if (MyLiveChat[a[9]] && MyLiveChat[a[638]] == a[14]) {
            return 4
        };
        if (MyLiveChat[a[639]] || MyLiveChat[a[640]] || MyLiveChat[a[641]]) {
            return 5
        };
        if (MyLiveChat[a[546]] == a[547]) {
            MyLiveChat[a[542]] = y(a[542])
        } else {
            if (MyLiveChat[a[546]] != a[409]) {
                MyLiveChat[a[478]] = null;
                return 6
            } else {
                if (MyLiveChat[a[478]]) {
                    return 7
                } else {
                    MyLiveChat[a[478]] = null;
                    var c = parseInt(y(a[425])) || 0;
                    if (c && new Date()[a[323]]() - c > 5 * 60 * 1000) {
                        return 8
                    };
                    var b = MyLiveChat[a[90]];
                    if (b > 0 && new Date()[a[323]]() - Math[a[427]](10, b) * 1000 < (parseInt(y(a[642])) || 0)) {
                        return 9
                    };
                    if (!bg()) {
                        return 10
                    }
                }
            }
        };
        z(a[643], new Date()[a[323]]());
        MyLiveChat[a[478]] = 1;
        MyLiveChat[a[479]] = MyLiveChat[a[618]] || y(a[618]) || MyLiveChat[a[310]];
        H(1);
        return -1
    }

    function bi(b, c) {
        z(a[642], new Date()[a[323]]());
        z(a[644], b);
        z(a[645], c);
        bj(true)
    }

    function bj(b) {
        if (!MyLiveChat[a[122]]) {
            return
        };
        if (MyLiveChat[a[512]]()) {
            return
        };
        if (!b && !MyLiveChat[a[546]]) {
            MyLiveChat[a[478]] = 1;
            MyLiveChat[a[479]] = MyLiveChat[a[618]] || y(a[618]) || MyLiveChat[a[310]];
            H(1)
        } else {
            if (b || MyLiveChat[a[546]] == a[547]) {
                bk(b)
            }
        }
    }

    function bk(c) {
        if (MyLiveChat[a[639]]) {
            return
        };
        MyLiveChat[a[639]] = true;
        MyLiveChat[a[641]] = true;
        MyLiveChat[a[539]] = y(a[644]);
        MyLiveChat[a[541]] = y(a[645]);
        MyLiveChat[a[542]] = MyLiveChat[a[542]] || y(a[542]) || a[13];
        MyLiveChat[a[542]] = MyLiveChat[a[542]][a[328]](a[543])[a[420]](MyLiveChat[a[541]]);
        if (MyLiveChat[a[82]]) {
            MyLiveChat[a[222]] = MyLiveChat[a[392]] + a[544] + MyLiveChat[a[240]] + a[545] + encodeURIComponent(MyLiveChat[a[541]])
        };
        if (c) {
            MyLiveChat[a[647]](a[646])
        };
        if (y(a[619]) == a[14]) {
            F(MyLiveChat[a[392]] + a[393] + MyLiveChat[a[16]] + a[394], MyLiveChat[a[18]])
        };
        if (MyLiveChat[a[648]] == a[14]) {
            bZ();
            return
        };
        MyLiveChat[a[649]]();

        function b() {
            if (!MyLiveChat[a[512]]() || MyLiveChat[a[650]]() || MyLiveChat[a[651]] != a[646]) {
                return
            };
            var c = false;
            if (MyLiveChat[a[89]] > 0 && new Date()[a[323]]() - MyLiveChat[a[89]] * 1000 > (parseInt(y(a[642])) || 0)) {
                c = true
            };
            var d = parseInt(y(a[425])) || 0;
            if (d && new Date()[a[323]]() - d > 5 * 60 * 1000) {
                c = true
            };
            if (c) {
                MyLiveChat[a[637]] = true;
                MyLiveChat[a[652]](true)
            } else {
                setTimeout(b, 2000)
            }
        }
        setTimeout(b, 2000)
    }

    function bl() {
        return MyLiveChat[a[517]] && MyLiveChat[a[517]][a[653]][a[582]] == a[13]
    }

    function bm() {}

    function bn() {}

    function bo() {}

    function bp() {}

    function bq() {}

    function br() {}

    function bs(a) {}

    function bt(b, a) {}

    function bu() {
        var d = u();
        if (!d) {
            return
        };
        var f;
        if (location[a[421]][a[247]](a[655]) != -1) {
            f = document[a[337]](a[656]);
            f[a[344]][a[657]] = a[658];
            document[a[335]][a[659]](f)
        };

        function g(b) {
            if (f) {
                f[a[435]] += b + a[660]
            }
        }
        MyLiveChat[a[661]] = String((new Date()[a[323]]() + Math[a[402]]()) / 1000 - 1400000000)[a[662]](0, 16);
        g(a[663] + MyLiveChat[a[661]]);
        MyLiveChat[a[647]] = function(d, b) {
            if (d == a[664] || d == a[665]) {
                switch (MyLiveChat[a[651]]) {
                    case a[666]:
                        ;
                    case a[667]:
                        ;
                    case a[664]:
                        ;
                    case a[665]:
                        break;
                    default:
                        return
                }
            };
            if (d == a[666] && MyLiveChat[a[651]] == a[665]) {
                d = a[665]
            };
            var e = MyLiveChat[a[661]] + a[429] + new Date()[a[323]]() + a[429] + d + a[429] + b;
            g(e);
            z(a[668], e);
            MyLiveChat[a[651]] = d;
            c()
        };
        var e = 0;
        var b;

        function c() {
            clearTimeout(b);
            b = setTimeout(c, 1000);
            MyLiveChat[a[651]] = null;
            var j = y(a[668]);
            if (!j) {
                bh();
                return
            };
            j = j[a[328]](a[429]);
            var d = parseInt(j[1]);
            var h = j[2];
            var l = new Date()[a[323]]() - d;
            if (l > 35000 || (h == a[669] && l > 12000)) {
                bh();
                return
            };
            MyLiveChat[a[651]] = h;
            if (e >= d) {
                if (l > 3000) {
                    var k = h == a[666] ? a[667] : h;
                    switch (k) {
                        case a[667]:
                            ;
                        case a[664]:
                            ;
                        case a[665]:
                            MyLiveChat[a[647]](k);
                            break;
                        case a[646]:
                            bj();
                            if (MyLiveChat[a[641]]) {
                                MyLiveChat[a[647]](a[646])
                            };
                            return
                    }
                };
                return
            };
            e = d;
            if (j[0] != MyLiveChat[a[661]]) {
                g(j)
            };
            var f = j[3];
            switch (h) {
                case a[670]:
                    break;
                case a[666]:
                    ;
                case a[667]:
                    ;
                case a[664]:
                    ;
                case a[665]:
                    MyLiveChat[a[517]][a[672]]({
                        mode: a[671],
                        collapsed: h == a[665]
                    });
                    break;
                case a[674]:
                    MyLiveChat[a[517]][a[673]]();
                    break;
                case a[646]:
                    bj();
                    return;
                case a[675]:
                    break;
                case a[669]:
                    MyLiveChat[a[517]][a[673]]();
                    bV();
                    break
            }
        }
        c()
    }

    function bv(c, b) {
        MyLiveChat[a[677]] = c;
        MyLiveChat[a[650]] = function() {
            return MyLiveChat[a[677]] && MyLiveChat[a[677]][a[678]]()
        }
    }

    function bw() {
        MyLiveChat[a[637]] = true;
        MyLiveChat[a[641]] = false;
        MyLiveChat[a[640]] = false;
        MyLiveChat[a[478]] = false;
        MyLiveChat[a[677]] = null;
        MyLiveChat[a[650]] = function() {};
        if (MyLiveChat[a[546]] == a[537]) {
            bY()
        } else {
            MyLiveChat[a[546]] = a[409];
            H(1)
        }
    }

    function bx(d, c) {
        var e = [];

        function b(h) {
            var d = h[a[680]];
            if (!d || !d[a[312]]) {
                return
            };
            for (var f = 0; f < d[a[312]]; f++) {
                var g = d[f];
                if (g[a[681]] != 1) {
                    continue
                };
                if (g[a[482]] == c || g[a[682]] == c) {
                    e[a[588]](g)
                };
                b(g)
            }
        }
        b(d);
        return e
    }

    function by(d, c, e, b) {
        switch (c) {
            case a[683]:
                ;
            case a[684]:
                return {
                    top: 0,
                    left: 0
                };
            case a[75]:
                return {
                    top: 0,
                    left: Math[a[151]](e / 2)
                };
            case a[685]:
                return {
                    top: 0,
                    left: e
                };
            case a[129]:
                return {
                    top: Math[a[151]](b / 2),
                    left: 0
                };
            case a[73]:
                return {
                    top: Math[a[151]](b / 2),
                    left: Math[a[151]](e / 2)
                };
            case a[686]:
                return {
                    top: Math[a[151]](b / 2),
                    left: e
                };
            case a[687]:
                return {
                    top: b,
                    left: 0
                };
            case a[688]:
                return {
                    top: b,
                    left: Math[a[151]](e / 2)
                };
            case a[96]:
                return {
                    top: b,
                    left: e
                };
            default:
                return {
                    top: b,
                    left: e
                }
        }
    }

    function bz(f, e) {
        if (!e) {
            e = a[96]
        };
        var d = document[a[689]] == a[690] ? document[a[335]] : document[a[691]];
        var c = d[a[692]];
        var b = d[a[693]];
        var h = f[a[694]] || 0;
        if (e != a[683]) {
            var g = by(f, e, c, b);
            if (e[a[247]](a[695]) != -1) {
                g[a[695]] += h
            };
            if (e[a[247]](a[696]) != -1) {
                g[a[695]] -= h
            };
            if (e[a[247]](a[697]) != -1) {
                g[a[697]] += h
            };
            if (e[a[247]](a[698]) != -1) {
                g[a[697]] -= h
            };
            return g
        };
        return by(e, c, b)
    }

    function bA(n, e, f) {
        e[a[699]] = function() {
            bA(n, e)
        };
        var p = e[a[700]];
        var j = !p;
        var b = bz(n, j ? n[a[701]] : n[a[702]]);
        var h = e[a[341]];
        var o = by(n, n[a[703]] || n[a[702]], h[a[460]] || e[a[704]], h[a[461]] || e[a[705]]);
        var q = b[a[695]] - o[a[695]] + n[a[706]] + (n[a[707]] || 0) + (n[a[708]] || 0);
        if (!n[a[709]]) {
            q += Math[a[427]](document[a[691]][a[710]], document[a[335]][a[710]])
        };
        var r = b[a[697]] - o[a[697]] + n[a[711]] + (n[a[712]] || 0) + (n[a[713]] || 0);
        if (!n[a[709]]) {
            r += Math[a[427]](document[a[691]][a[714]], document[a[335]][a[714]])
        };
        if (p && !f && !n[a[709]]) {
            var c = parseInt(e[a[344]][a[695]]) + p[a[695]] - o[a[695]];
            var d = parseInt(e[a[344]][a[697]]) + p[a[697]] - o[a[697]];
            var g = n[a[715]] || 8;
            var l = Math[a[716]]((q - c) / g);
            var m = Math[a[716]]((r - d) / g);

            function k(a) {
                if (a < g) {
                    return g
                };
                return a
            }
            l = l > 0 ? Math[a[426]](q - c, k(l)) : -Math[a[426]](c - q, k(-l));
            m = m > 0 ? Math[a[426]](r - d, k(m)) : -Math[a[426]](d - r, k(-m));
            q = c + l;
            r = d + m
        };
        e[a[344]][a[695]] = q + a[717];
        e[a[344]][a[697]] = r + a[717];
        e[a[700]] = o
    }

    function bB(d) {
        this[a[522]] = MyLiveChat[a[122]];
        if (!d) {
            d = {}
        };
        var b = {
            name: a[719],
            showclose: MyLiveChat[a[9]],
            offsetx: 0,
            offsety: 0,
            bodypadding: MyLiveChat[a[135]],
            startpos: MyLiveChat[a[128]],
            position: MyLiveChat[a[130]],
            postimer: 15,
            hideoffsetx: MyLiveChat[a[131]],
            hideoffsety: MyLiveChat[a[132]],
            showoffsetx: MyLiveChat[a[133]],
            showoffsety: MyLiveChat[a[134]],
            onlineimageurl: MyLiveChat[a[138]],
            offlineimageurl: MyLiveChat[a[139]],
            onlineimageurlhover: MyLiveChat[a[142]],
            offlineimageurlhover: MyLiveChat[a[143]],
            _: 0
        };
        for (var e in b) {
            if (!(e in d)) {
                d[e] = b[e]
            }
        };
        d[a[709]] = MyLiveChat[a[127]];
        if (d[a[709]]) {
            if (/MSIE [56]/ [a[11]](navigator[a[10]]) || document[a[689]] == a[690]) {
                d[a[709]] = false
            }
        };
        var c = MlcBuidinWidget[a[718]][d[a[632]]];
        if (c == null) {
            c = MlcBuidinWidget[a[718]][d[a[632]]] = new MlcBuidinWidget[a[720]](d)
        } else {
            c[a[721]](d)
        };
        return c
    }

    function bC(c) {
        var b;
        var e = this;
        e[a[722]] = document[a[337]](a[723]);
        e[a[722]][a[344]][a[702]] = c[a[709]] ? a[724] : a[725];
        e[a[722]][a[344]][a[726]] = a[727];
        e[a[722]][a[344]][a[460]] = a[728];
        e[a[722]][a[344]][a[461]] = a[728];
        e[a[722]][a[344]][a[729]] = a[730];
        e[a[722]][a[344]][a[731]] = a[732];
        e[a[722]][a[526]] = a[733];
        e[a[734]] = e[a[722]][a[341]];
        e[a[734]][a[735]] = function() {
            S(a[500])
        };
        if (c[a[736]]) {
            e[a[737]] = document[a[337]](a[723]);
            e[a[737]][a[344]][a[657]] = a[738] + MyLiveChat[a[392]] + a[739];
            e[a[737]][a[735]] = function() {
                document[a[335]][a[740]](e[a[722]])
            };
            e[a[722]][a[659]](e[a[737]])
        };
        e[a[519]] = function() {
            e[a[722]][a[344]][a[582]] = a[13]
        };
        e[a[520]] = function() {
            e[a[722]][a[344]][a[582]] = a[564]
        };
        document[a[335]][a[342]](e[a[722]], document[a[335]][a[341]]);
        e[a[707]] = c[a[741]];
        e[a[712]] = c[a[742]];
        e[a[722]][a[743]] = function() {
            e[a[707]] = c[a[744]];
            e[a[712]] = c[a[745]]
        };
        e[a[722]][a[746]] = function() {
            e[a[707]] = c[a[741]];
            e[a[712]] = c[a[742]]
        };

        function d() {
            clearTimeout(e[a[747]]);
            e[a[747]] = setTimeout(d, c[a[748]]);
            c[a[707]] = e[a[707]];
            c[a[712]] = e[a[712]];
            bA(c, e[a[722]]);
            if (c[a[736]]) {
                e[a[737]][a[344]][a[749]] = (((e[a[734]][a[704]] - e[a[737]][a[704]]) / 2) || 0) + a[717]
            }
        }
        this[a[721]] = function(f) {
            b = c;
            c = f;
            c[a[750]] = MyLiveChat[a[122]] ? c[a[751]] : c[a[752]];
            c[a[753]] = MyLiveChat[a[122]] ? c[a[754]] : c[a[755]];
            for (var g in c) {
                if (b != c && c[g] == b[g]) {
                    continue
                };
                switch (g) {
                    case a[750]:
                        e[a[734]][a[397]] = c[a[750]];
                        e[a[734]][a[340]](a[756], c[a[750]]);
                        break;
                    case a[753]:
                        e[a[734]][a[340]](a[757], c[a[753]]);
                        break
                }
            };
            e[a[734]][a[758]] = d;
            e[a[734]][a[743]] = function() {
                if (this[a[358]](a[757])) {
                    this[a[397]] = this[a[358]](a[757])
                }
            };
            e[a[734]][a[746]] = function() {
                if (this[a[358]](a[757])) {
                    this[a[397]] = this[a[358]](a[756])
                }
            };
            d()
        };
        this[a[721]](c)
    }

    function bD(f, c) {
        if (!f) {
            f = a[96]
        };
        if (!c && c !== 0) {
            c = 5
        };
        var e = document[a[689]] == a[690] ? document[a[335]] : document[a[691]];
        var d = e[a[692]];
        var b = e[a[693]];
        if (window[a[759]] && MyLiveChat[a[9]]) {
            d = window[a[760]];
            b = window[a[759]]
        };
        if (f != a[683]) {
            var g = bE(f, d, b);
            if (f[a[247]](a[695]) != -1) {
                g[a[695]] += c
            };
            if (f[a[247]](a[696]) != -1) {
                g[a[695]] -= c
            };
            if (f[a[247]](a[697]) != -1) {
                g[a[697]] += c
            };
            if (f[a[247]](a[698]) != -1) {
                g[a[697]] -= c
            };
            return g
        };
        return bE(f, d, b)
    }

    function bE(c, d, b) {
        switch (c) {
            case a[683]:
                ;
            case a[684]:
                return {
                    top: 0,
                    left: 0
                };
            case a[75]:
                return {
                    top: 0,
                    left: Math[a[151]](d / 2)
                };
            case a[685]:
                return {
                    top: 0,
                    left: d
                };
            case a[129]:
                return {
                    top: Math[a[151]](b / 2),
                    left: 0
                };
            case a[73]:
                return {
                    top: Math[a[151]](b / 2),
                    left: Math[a[151]](d / 2)
                };
            case a[686]:
                return {
                    top: Math[a[151]](b / 2),
                    left: d
                };
            case a[687]:
                return {
                    top: b,
                    left: 0
                };
            case a[688]:
                return {
                    top: b,
                    left: Math[a[151]](d / 2)
                };
            case a[96]:
                return {
                    top: b,
                    left: d
                };
            default:
                return {
                    top: b,
                    left: d
                }
        }
    }

    function bF(b, a) {
        return a
    }

    function bG(b, c) {
        MyLiveChat[a[443]] = b;
        if (typeof(c) != a[314]) {
            MyLiveChat[a[441]] = c
        };
        z(a[443], b)
    }

    function bH(b) {
        MyLiveChat[a[445]] = b;
        z(a[445], b)
    }

    function bI(b) {
        MyLiveChat[a[310]] = b
    }

    function bJ(b) {
        MyLiveChat[a[450]] = b
    }

    function bK(b) {
        MyLiveChat[a[452]] = b
    }

    function bL(d) {
        var g = MyLiveChat[a[305]];
        if (!(g instanceof Array)) {
            g = []
        };
        if (d instanceof Array) {
            d = bb(d)
        };
        MyLiveChat[a[307]] = d;
        try {
            MyLiveChat[a[305]] = eval(a[586] + (MyLiveChat[a[307]] || a[370])) || []
        } catch (x) {
            MyLiveChat[a[305]] = []
        };
        for (var e = 0; e < MyLiveChat[a[305]][a[312]]; e++) {
            var b = MyLiveChat[a[305]][e];
            for (var f = 0; f < g[a[312]]; f++) {
                var c = g[f];
                if (c[a[313]] == b[a[313]]) {
                    for (var h in c) {
                        if (!(h in b)) {
                            b[h] = c[h]
                        }
                    }
                }
            }
        }
    }

    function bM(b) {
        MyLiveChat[a[432]] = b
    }

    function bN(b) {
        MyLiveChat[a[455]] = b
    }

    function bO(b) {
        MyLiveChat[a[457]] = b
    }

    function bP(b) {
        var c = parseInt(y(a[425])) || 0;
        z(a[425], String(new Date()[a[323]]()));
        if (MyLiveChat[a[403]] || MyLiveChat[a[404]]) {
            return
        };
        if (b !== true && c && new Date()[a[323]]() - c > 5 * 60 * 1000) {
            H(1)
        }
    }

    function bQ() {
        if (!document[a[335]]) {
            setTimeout(function() {
                bQ()
            }, 100);
            return
        };
        if (MyLiveChat[a[517]]) {
            return
        };
        MyLiveChat[a[517]] = MyLiveChat_CreateInlinePanel();
        MyLiveChat[a[517]][a[520]]();
        MyLiveChat_InlineChatInit()
    }

    function bR() {
        bS()
    }

    function bS() {
        bQ();

        function b() {
            if (MyLiveChat[a[517]]) {
                if (MyLiveChat[a[190]] == a[521] && !MyLiveChat[a[122]]) {
                    return
                };
                MyLiveChat[a[517]][a[519]]()
            } else {
                setTimeout(b, 10)
            }
        }
        b()
    }

    function bT(b) {
        if (MyLiveChat[a[763]]) {
            return
        };
        MyLiveChat[a[763]] = document[a[471]](a[584]);
        if (!MyLiveChat[a[763]]) {
            return
        };
        var d = a[764];
        var c = document[a[471]](d);
        if (c != null) {
            if (MyLiveChat[a[765]]) {
                MyLiveChat[a[765]]()
            };
            return
        };
        var e = MyLiveChat[a[392]] + a[766] + MyLiveChat[a[240]];
        e = e + a[767] + new Date()[a[323]]();
        c = document[a[337]](a[472]);
        c[a[482]] = d;
        c[a[397]] = e;
        document[a[335]][a[342]](c, document[a[335]][a[341]])
    }

    function bU() {
        MyLiveChat[a[122]] = true;
        if (MyLiveChat[a[512]]()) {
            return
        };
        if (new Date()[a[323]]() - (MyLiveChat[a[768]] || 0) < 2000) {
            return
        };
        E(a[769]);
        if (MyLiveChat[a[93]] && !MyLiveChat[a[770]]) {
            MyLiveChat[a[770]] = true;
            F(MyLiveChat[a[8]] + a[771] + MyLiveChat[a[16]] + a[394], MyLiveChat[a[18]])
        };
        if (MyLiveChat[a[772]] == a[14]) {
            bZ();
            return
        };
        z(a[773], new Date()[a[323]]());
        MyLiveChat[a[639]] = true;
        MyLiveChat[a[640]] = true;
        MyLiveChat[a[649]]();

        function b() {
            if (!MyLiveChat[a[512]]() || MyLiveChat[a[650]]()) {
                return
            };
            var c = false;
            if (MyLiveChat[a[89]] > 0 && new Date()[a[323]]() - MyLiveChat[a[89]] * 1000 > (parseInt(y(a[773])) || 0)) {
                c = true
            };
            var d = parseInt(y(a[425])) || 0;
            if (d && new Date()[a[323]]() - d > 5 * 60 * 1000) {
                c = true
            };
            if (c) {
                MyLiveChat[a[637]] = true;
                MyLiveChat[a[652]](true)
            } else {
                setTimeout(b, 2000)
            }
        }
        setTimeout(b, 2000)
    }

    function bV() {
        ca()
    }

    function bW(b) {
        MyLiveChat[a[768]] = new Date();
        var d = false;
        if (MyLiveChat[a[546]] == a[537]) {
            clearTimeout(MyLiveChat[a[406]]);
            P(a[548]);
            if (MyLiveChat[a[772]] == a[14]) {
                d = true
            }
        };
        if (MyLiveChat[a[546]] == a[547]) {
            MyLiveChat[a[478]] = false;
            z(a[642], new Date()[a[323]]());
            MyLiveChat[a[546]] = a[409];
            H(9000);
            if (MyLiveChat[a[648]] == a[14]) {
                d = true
            } else {
                MyLiveChat[a[649]]()
            }
        };
        ca();
        if (d) {
            var c = a[510];
            if (MyLiveChat[a[9]]) {
                return window[a[516]](Q(c), a[515])
            } else {
                return window[a[516]](Q(c), a[515], MyLiveChat[a[145]])
            }
        }
    }

    function bX() {
        if (MyLiveChat[a[772]] == a[14]) {} else {
            MyLiveChat[a[649]]()
        }
    }

    function bY() {
        if (MyLiveChat[a[546]] == a[537]) {
            clearTimeout(MyLiveChat[a[406]]);
            P(a[774])
        };
        if (MyLiveChat[a[546]] == a[547]) {
            MyLiveChat[a[637]] = true;
            MyLiveChat[a[641]] = false;
            MyLiveChat[a[640]] = false;
            MyLiveChat[a[478]] = false;
            z(a[642], new Date()[a[323]]());
            MyLiveChat[a[546]] = a[409];
            H(1)
        };
        ca();
        MyLiveChat[a[647]](a[669])
    }

    function bZ() {
        if (MyLiveChat[a[775]]) {
            return
        };
        var b = MyLiveChat[a[775]] = document[a[337]](a[722]);
        b[a[344]][a[657]] = a[776];
        document[a[335]][a[342]](b, document[a[335]][a[341]]);
        var d = a[777];
        var c = document[a[471]](d);
        if (c != null) {
            if (MyLiveChat[a[778]]) {
                MyLiveChat[a[778]]()
            };
            return
        };
        var e = MyLiveChat[a[392]] + a[779] + MyLiveChat[a[240]];
        e = e + a[767] + new Date()[a[323]]();
        c = document[a[337]](a[472]);
        c[a[482]] = d;
        c[a[397]] = e;
        document[a[335]][a[342]](c, document[a[335]][a[341]])
    }

    function ca() {
        if (!MyLiveChat[a[775]]) {
            return
        };
        var b = MyLiveChat[a[775]];
        MyLiveChat[a[775]] = null;
        document[a[335]][a[740]](b)
    }

    function cb() {
        if (!MyLiveChat[a[122]]) {
            return
        };
        z(a[430], String(1 + (parseInt(y(a[430])) || 0)), 86400 * 365)
    }

    function cc() {
        try {
            console[a[238]](a[790])
        } catch (x) {}
    }
    MyLiveChat_InitOnce = m;
    MyLiveChat_CalcImagePath = n;
    MyLiveChat_CalcCustomUrl = o;
    MyLiveChat_InitOnceInline = p;
    MyLiveChat_InitOnceFinal = q;
    MyLiveChat_IsDuringOperatingHours = r;
    MyLiveChat_InitStorate = s;
    MyLiveChat_LoadUserDataBehavior = t;
    MyLiveChat_SupportLocalData = u;
    MyLiveChat_GetCookie = v;
    MyLiveChat_SetCookie = w;
    MyLiveChat_GetLocalData = y;
    MyLiveChat_SetLocalData = z;
    MyLiveChat_InitID = A;
    MyLiveChat_SyncToCPR = B;
    MyLiveChat_PatternMatch = C;
    MyLiveChat_HtmlEncode = D;
    MyLiveChat_InvokeEvent = E;
    MyLiveChat_PlaySound = F;
    MyLiveChat_DelayRequest = G;
    MyLiveChat_SetNextReqTimeout = H;
    MyLiveChat_NextRequest = I;
    MyLiveChat_SyncFromCPR = J;
    MyLiveChat_CPRDecode = K;
    MyLiveChat_CPREncode = L;
    MyLiveChat_GetSourceUrl = M;
    MyLiveChat_GetReferrer = N;
    MyLiveChat_AppendToUrl = O;
    MyLiveChat_ChangeUrl = P;
    MyLiveChat_GetDialogUrl = Q;
    MyLiveChat_IsUseInlineChat = R;
    MyLiveChat_OpenDialog = S;
    MyLiveChat_UpdateWidgetInline = T;
    MyLiveChat_ShowChatWidget = U;
    MyLiveChat_ForEachElement = V;
    MyLiveChat_WriteOrSetHTML = W;
    MyLiveChat_Initialize = X;
    MyLiveChat_RunLoadingHandler = Y;
    MyLiveChat_AddCustomData = Z;
    MergeCustomData = ba;
    ConvertToJson = bb;
    MyLiveChat_InlineTriggerMatch = bc;
    MyLiveChat_FilterStringMatch = bd;
    MyLiveChat_InlineTriggerNewMatch = be;
    MyLiveChat_MatchNewTriggers = bf;
    MyLiveChat_MatchServerTriggers = bg;
    MyLiveChat_TryServerInvitation = bh;
    MyLiveChat_OnServerInvitation = bi;
    MyLiveChat_RestoreServerInvite = bj;
    MyLiveChat_StartServerInvitation = bk;
    mlcwidget_findelements = bx;
    mlcwidget_calcpoint = by;
    mlcwidget_calcbodypoint = bz;
    mlcwidget_nextposition = bA;
    MyLiveChat_CalcBodyPoint = bD;
    MyLiveChat_CalcPoint = bE;
    MyLiveChat_MovePoint = bF;
    MyLiveChat_SetUserName = bG;
    MyLiveChat_SetEmail = bH;
    MyLiveChat_SetDepartment = bI;
    MyLiveChat_SetSubject = bJ;
    MyLiveChat_SetQuestion = bK;
    MyLiveChat_SetCustomData = bL;
    MyLiveChat_SetContextData = bM;
    MyLiveChat_SetProductName = bN;
    MyLiveChat_SetProductKey = bO;
    MyLiveChat_OnUserIsOnline = bP;
    MyLiveChat_PrepairInlineChat = bQ;
    MyLiveChat_ShowInPageChat = bR;
    MyLiveChat_ShowInlineChat = bS;
    MyLiveChat_ShowChatBox = bT;
    MyLiveChat_ShowInvite = bU;
    MyLiveChat_HideInvite = bV;
    MyLiveChat_AcceptInvite = bW;
    MyLiveChat_OnInviteAccepted = bX;
    MyLiveChat_RejectInvite = bY;
    MyLiveChat_ShowInviteTemplate = bZ;
    MyLiveChat_HideInviteTemplate = ca;
    MyLiveChat[a[0]] = b;
    MyLiveChat[a[3]] = c;
    MyLiveChat[a[0]] = d;
    MyLiveChat[a[3]] = e;
    MyLiveChat[a[0]] = f;
    MyLiveChat[a[3]] = g;
    MyLiveChat[a[0]] = h;
    MyLiveChat[a[3]] = j;
    MyLiveChat[a[0]] = k;
    MyLiveChat[a[3]] = l;
    m();
    p();
    q();
    s();
    MyLiveChat[a[503]] = bl;
    MyLiveChat[a[512]] = bm;
    MyLiveChat[a[654]] = bn;
    MyLiveChat[a[514]] = bo;
    MyLiveChat[a[513]] = bp;
    MyLiveChat[a[650]] = bq;
    MyLiveChat[a[649]] = br;
    MyLiveChat[a[652]] = bs;
    MyLiveChat[a[647]] = bt;
    MyLiveChat_InlineChatInit = bu;
    MyLiveChat[a[676]] = bv;
    MyLiveChat[a[679]] = bw;
    MlcBuidinWidget = {};
    MlcBuidinWidget[a[522]] = null;
    MlcBuidinWidget[a[718]] = {};
    MlcBuidinWidget[a[523]] = bB;
    MlcBuidinWidget[a[720]] = bC;
    if (MyLiveChat[a[403]]) {
        MyLiveChat[a[441]] = MyLiveChat[a[309]][a[761]];
        MyLiveChat[a[443]] = MyLiveChat[a[309]][a[321]];
        MyLiveChat[a[445]] = MyLiveChat[a[309]][a[762]];
        MyLiveChat[a[310]] = MyLiveChat[a[309]][a[308]]
    } else {
        if (!MyLiveChat[a[443]]) {
            MyLiveChat[a[443]] = y(a[443])
        };
        if (!MyLiveChat[a[445]]) {
            MyLiveChat[a[445]] = y(a[445])
        }
    };
    MyLiveChat[a[511]] = cb;
    MyLiveChat_InitCss2();
    if (!MyLiveChat[a[404]]) {
        if (document[a[780]]) {
            document[a[780]](a[781], bP, false);
            document[a[780]](a[782], bP, false);
            window[a[780]](a[783], bP, false);
            window[a[780]](a[784], bP, false)
        } else {
            document[a[785]](a[781], bP);
            document[a[785]](a[786], bP);
            window[a[785]](a[783], bP);
            window[a[785]](a[784], bP)
        };
        bP(true);
        isnewid = A();
        z(a[369], MyLiveChat[a[369]], 86400 * 365);
        if (isnewid && !y(a[430])) {
            z(a[430], a[31], 86400 * 365)
        };
        X()
    };
    if (MyLiveChat[a[403]]) {
        MyLiveChat_DocWrite(a[787] + MyLiveChat[a[392]] + a[788] + MyLiveChat[a[240]] + a[476] + MyLiveChat[a[369]] + a[789])
    };
    (cc)()
})()