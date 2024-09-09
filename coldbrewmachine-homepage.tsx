<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>혁신적인 콜드브루 추출 시스템</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        nav {
            margin: 20px;
            text-align: center;
        }
        nav a {
            margin: 0 15px;
            color: #333;
            text-decoration: none;
        }
        .main-section {
            text-align: center;
            padding: 50px 20px;
            background-color: #f5f5f5;
        }
        .cta-button {
            padding: 10px 20px;
            margin: 10px;
            background-color: #007BFF;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        section {
            padding: 50px 20px;
            text-align: center;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        form label, form input, form textarea {
            margin: 10px 0;
            width: 80%;
            max-width: 500px;
        }
        form button {
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>혁신적인 콜드브루 추출 시스템</h1>
    </header>

    <nav>
        <a href="#product-intro">제품 소개</a>
        <a href="#technical-advantages">기술적 장점</a>
        <a href="#usage-guide">사용 가이드</a>
        <a href="#contact-us">문의하기</a>
    </nav>

    <div class="main-section">
        <h1>차원이 다른 콜드브루 추출 기술</h1>
        <p>우리의 콜드브루 머신으로 고품질, 대용량 콜드브루를 생산하세요.</p>
        <button class="cta-button">제품 문의</button>
        <button class="cta-button">구매하기</button>
    </div>

    <section id="product-intro">
        <h2>제품 소개</h2>
        <img src="product.jpg" alt="콜드브루 추출기">
        <p>우리 콜드브루 추출기는 상업용에 최적화된 대용량 추출 시스템을 갖추고 있습니다. 냉장 밀폐 추출과 스프레이 방식의 물 분사로 일관된 품질의 콜드브루를 만드세요.</p>
    </section>

    <section id="technical-advantages">
        <h2>기술적 장점</h2>
        <ul>
            <li><strong>냉장 밀폐 추출:</strong> 온도 관리로 위생적이고 효율적입니다.</li>
            <li><strong>스프레이 방식 물 분사:</strong> 균일한 추출로 최상의 품질 보장.</li>
            <li><strong>대용량 추출:</strong> 최대 3kg까지 대량 추출 가능.</li>
            <li><strong>디지털 입력 시스템:</strong> 정밀한 제어로 재현성 높음.</li>
        </ul>
    </section>

    <section id="usage-guide">
        <h2>사용 가이드</h2>
        <p>우리 콜드브루 머신은 간편하게 사용할 수 있도록 설계되었습니다. 아래 가이드를 따라 최적의 성능을 유지하세요:</p>
        <ol>
            <li>원두를 분쇄하여 투입하세요.</li>
            <li>디지털 입력 시스템으로 원하는 추출 설정을 입력하세요.</li>
            <li>추출 완료 후, 기기를 청소하고 유지 보수하세요.</li>
        </ol>
    </section>

    <section id="contact-us">
        <h2>문의하기</h2>
        <form action="/submit-form" method="post">
            <label for="name">이름:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">이메일:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">메시지:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">보내기</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 혁신적인 콜드브루 추출 시스템</p>
    </footer>
</body>
</html>
