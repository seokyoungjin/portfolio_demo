import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 필수 필드 검증
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 전송을 위한 트랜스포터 설정
    // 참고: 실제 환경에서는 환경 변수를 사용해야 합니다
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // 실제 사용 시 환경 변수로 설정해야 합니다
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    // 이메일 옵션 설정
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER || 'your-email@gmail.com',
      subject: `[포트폴리오 문의] ${subject}`,
      text: `
        이름: ${name}
        이메일: ${email}
        
        ${message}
      `,
      html: `
        <div>
          <h3>포트폴리오 웹사이트에서 문의가 도착했습니다.</h3>
          <p><strong>이름:</strong> ${name}</p>
          <p><strong>이메일:</strong> ${email}</p>
          <p><strong>제목:</strong> ${subject}</p>
          <p><strong>메시지:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // 개발 환경에서는 실제 이메일을 보내지 않고 로그만 출력
    if (process.env.NODE_ENV === 'development') {
      console.log('개발 환경에서는 이메일이 전송되지 않습니다.');
      console.log('메일 옵션:', mailOptions);
      return NextResponse.json({ success: true, message: '개발 환경에서 이메일 전송이 시뮬레이션되었습니다.' });
    }

    // 실제 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: '이메일이 성공적으로 전송되었습니다.' });
  } catch (error) {
    console.error('이메일 전송 오류:', error);
    return NextResponse.json(
      { error: '이메일 전송 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 