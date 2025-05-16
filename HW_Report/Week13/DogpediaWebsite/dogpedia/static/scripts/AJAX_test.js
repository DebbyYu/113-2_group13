const dogData = {
    Poodle: ["可可", "毛球", "奶油", "圓圓"],
    Chihuahua: ["豆豆", "米米", "豆花", "球球"],
    Pomeranian: ["棉棉", "雪球", "波波", "嘟嘟"],
    Bichon_Frise: ["雪寶", "糖糖", "白雪", "QQ"],
    Shiba_Inu: ["阿柴", "柴柴", "饅頭", "豆柴"],
    Akita_Inu: ["秋秋", "銀次", "熊大", "赤赤"]
};

const dogInfo = {
    // Poodle
    "可可": { imgSrc: "../../static/images/poodle_1.png", description: ["活潑黏人，是家中開心果。", "接飛盤、聽古典樂。", "毛色捲曲，身形小巧。", "建議每週洗澡與修剪毛髮。"] },
    "毛球": { imgSrc: '../../static/images/poodle_2.png', description: ["喜歡安靜角落觀察人類。", "抱娃娃睡覺。", "喜歡乾淨，行為有規律。", "不喜歡濕冷天氣。"] },
    "奶油": { imgSrc: '../../static/images/poodle_3.png', description: ["和小孩互動融洽。", "玩躲貓貓。", "機靈反應快。", "飲食需注意腸胃敏感。"] },
    "圓圓": { imgSrc: '../../static/images/poodle_4.png', description: ["適合公寓飼養。", "坐推車兜風。", "表情豐富。", "外出需穿衣防寒。"] },
    // Chihuahua
    "豆豆": { imgSrc: '../../static/images/chihuahua_1.png', description: ["喜歡窩在毯子裡。", "爬沙發、黏主人。", "體型嬌小。", "注意骨骼脆弱。"] },
    "米米": { imgSrc: '../../static/images/chihuahua_2.png', description: ["需要有耐心訓練。", "咬手套、追小球。", "好奇又機警。", "需定期社會化。"] },
    "豆花": { imgSrc: '../../static/images/chihuahua_3.png', description: ["喜歡安靜空間。", "曬太陽、看窗外。", "胆小但可愛。", "建議使用胸背帶。"] },
    "球球": { imgSrc: '../../static/images/chihuahua_4.png', description: ["偏好單一飼主。", "躲被窩。", "警覺性高。", "避免劇烈運動。"] },
    // Pomeranian
    "棉棉": { imgSrc: '../../static/images/pomeranian_1.png', description: ["喜歡熱鬧、家庭感強。", "搖尾巴、撒嬌。", "毛量豐富。", "需常梳毛。"] },
    "雪球": { imgSrc: '../../static/images/pomeranian_2.png', description: ["是家中公主。", "坐在窗邊發呆。", "外型可愛。", "容易焦慮需陪伴。"] },
    "波波": { imgSrc: '../../static/images/pomeranian_3.png', description: ["與貓咪也能相處。", "跟著人類走來走去。", "表情活潑。", "易胖要控制體重。"] },
    "嘟嘟": { imgSrc: '../../static/images/pomeranian_4.png', description: ["可獨處不吵鬧。", "聽音樂入睡。", "性格溫馴。", "保持通風。"] },
    // Bichon Frise
    "雪寶": { imgSrc: '../../static/images/bichon_1.png', description: ["與孩子互動佳。", "咬毛線球。", "捲毛白淨。", "要常洗澡保白毛。"] },
    "糖糖": { imgSrc: '../../static/images/bichon_2.png', description: ["開朗親人。", "和主人撒嬌。", "短腿圓圓滾滾。", "避免過度熱。"] },
    "白雪": { imgSrc: '../../static/images/bichon_3.png', description: ["喜歡窩腳邊。", "聽故事。", "柔軟毛髮。", "毛打結需小心。"] },
    "QQ": { imgSrc: '../../static/images/bichon_4.png', description: ["安靜乖巧。", "追蝴蝶。", "圓圓眼神迷人。", "需留意淚痕清潔。"] },
    // Shiba Inu
    "阿柴": { imgSrc: '../../static/images/shiba_1.png', description: ["忠誠警戒心強。", "在院子裡巡邏。", "有笑容感臉部。", "適合有戶外空間。"] },
    "柴柴": { imgSrc: '../../static/images/shiba_2.png', description: ["早起作息穩定。", "跟球玩。", "表情古靈精怪。", "需要大量運動。"] },
    "饅頭": { imgSrc: '../../static/images/shiba_3.png', description: ["性格穩重。", "看書陪伴。", "毛質柔軟濃密。", "換毛期清理多。"] },
    "豆柴": { imgSrc: '../../static/images/shiba_4.png', description: ["小型柴犬更適合室內。", "跟著人類身影。", "體型迷你。", "注意耳朵清潔。"] },
    // Akita Inu
    "秋秋": { imgSrc: "../../static/images/akita_1.png", description: ["忠心耿耿。", "護家警戒。", "體格壯碩。", "需早期訓練。"] },
    "銀次": { imgSrc: '../../static/images/akita_2.png', description: ["親近主人但對外人警戒。", "看風景。", "外型威嚴。", "不適合太熱環境。"] },
    "熊大": { imgSrc: '../../static/images/akita_3.png', description: ["慢熟型，需要時間建立信任。", "守衛門口。", "體型巨大、眼神沉穩。", "飼主需有經驗。"] },
    "赤赤": { imgSrc: '../../static/images/akita_4.png', description: ["與同伴狗互動良好。", "爬山郊遊。", "毛色偏紅、帥氣。", "每日需外出散步。"] }
};

document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("card-grid");
    let currentPage = 1;
    let isLoading = false;
    let breed = new URLSearchParams(window.location.search).get('breed') || 'Poodle';
    let hasNext = true;
    const initialLoadCount = 6; // 初始載入的狗狗數量

    function loadDogs(page, initialLoad = false) {
        if (isLoading || (!hasNext && !initialLoad)) {
            return;
        }
        isLoading = true;

        const apiUrl = '/load_more_animals/'; // 替換為你的後端 API URL
        const queryParams = { breed: breed, page: page, limit: 6, csrfmiddlewaretoken:$('[name="csrfmiddlewaretoken"]').val() };
        if (initialLoad) {
            queryParams.limit = initialLoadCount; // 傳遞初始載入數量
        }

        $.ajax({
            url: '',
            type: 'POST',
            data: queryParams,
            dataType: 'json',
            success: function (data) {
                if (data.animals && data.animals.length > 0) {
                    data.animals.forEach(dog => {
                        const card = document.createElement("div");
                        card.className = "card";
                        card.innerHTML = `
                            <img src="${dog.image_url}" alt="${dog.name}" />
                            <h2>${dog.name}</h2>
                            <div class="description">
                                <p><strong>家庭生活:</strong> ${dog.description[0]}</p>
                                <p><strong>興趣:</strong> ${dog.description[1]}</p>
                                <p><strong>特色:</strong> ${dog.description[2]}</p>
                                <p><strong>飼養須知:</strong> ${dog.description[3]}</p>
                                <p>點我看更多</p>
                            </div>`;
                        grid.appendChild(card);
                    });
                    hasNext = data.has_next;
                    isLoading = false;
                    if (initialLoad && hasNext) {
                        currentPage++; // 初始載入後，如果還有下一頁，準備載入下一頁
                    } else if (!initialLoad) {
                        if (hasNext) {
                            currentPage++;
                        }
                    }
                } else {
                    hasNext = false;
                    isLoading = false;
                    // 可選：顯示 "沒有更多動物了" 的訊息
                }
            },
            error: function (error) {
                console.error('載入更多動物時發生錯誤:', error);
                isLoading = false;
                // 處理錯誤情況
            }
        });
    }

    // 初始載入前 initialLoadCount 隻狗狗
    loadDogs(currentPage, true);

    // 滾動事件監聽器
    window.addEventListener('scroll', function() {
        if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 200 && !isLoading && hasNext) {
            loadDogs(currentPage);
        }
    });
});