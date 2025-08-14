import React from 'react'
import { FaCloud, FaCogs, FaDatabase, FaTools } from 'react-icons/fa'

const About = () => {
  const skills = [
    { name: 'Automation & CI/CD', icon: FaCogs, items: ['GitHub Actions', 'Ansible', 'Jenkins', 'Terraform'] },
    { name: 'Container & Orchestration', icon: FaTools, items: ['Docker', 'K3s/Kubernetes', 'Docker Compose'] },
    { name: 'Cloud & Infrastructure', icon: FaCloud, items: ['AWS', 'OpenNebula', 'Vercel', 'Netlify'] },
    { name: 'Monitoring & Logging', icon: FaDatabase, items: ['Prometheus', 'Grafana', 'Loki', 'EMQX'] }
  ]

  return (
    <div className="about">
      <div className="about-header">
        <h1 className="section-title">Về tôi</h1>
        <p className="section-subtitle">"Hành trình học hỏi và phát triển trong lĩnh vực DevOps"</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <div className="about-section">
            <h2>Giới thiệu</h2>
            <p>
              Tôi là một sinh viên Công nghệ Thông tin với niềm đam mê xây dựng hệ thống hạ tầng hiện đại và tự động hóa quy trình triển khai phần mềm.
              Tôi đã thực hiện một số dự án cá nhân như hệ thống DevOps cho mô hình IoT 3 tầng (Device – Edge – Cloud) và hạ tầng ảo hóa phục vụ livestream nội bộ.
            </p>
            <p>
              Dù vẫn đang trên con đường học hỏi, tôi luôn chủ động tìm hiểu công nghệ mới, từ containerization, CI/CD cho đến cloud computing,
              với mục tiêu tạo ra các hệ thống ổn định, bảo mật và dễ mở rộng.
            </p>
          </div>

          <div className="about-section">
            <h2>Giá trị cốt lõi</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Tự động hóa</h3>
                <p>Giảm thiểu thao tác thủ công, tăng hiệu suất triển khai</p>
              </div>
              <div className="value-item">
                <h3>Độ tin cậy</h3>
                <p>Xây dựng hệ thống ổn định, dễ giám sát và phục hồi</p>
              </div>
              <div className="value-item">
                <h3>Học hỏi</h3>
                <p>Liên tục nâng cao kỹ năng và khám phá công nghệ mới</p>
              </div>
              <div className="value-item">
                <h3>Hợp tác</h3>
                <p>Làm việc nhóm hiệu quả, phối hợp chặt chẽ với các bộ phận</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>Kỹ năng & Công nghệ</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <div className="skill-header">
                  <skill.icon className="skill-icon" />
                  <h3>{skill.name}</h3>
                </div>
                <div className="skill-items">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="skill-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2>Dự án tiêu biểu</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Hệ thống DevOps cho IoT 3 tầng</h3>
                <p className="period">17/2/2025 - 7/6/2025</p>
                <p>Tự động hóa build, cập nhật và giám sát cho ESP32 và Raspberry Pi, tích hợp container hóa và monitoring tập trung.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Hạ tầng ảo hóa cho livestream nội bộ</h3>
                <p className="period">7/3/2025 - 26/5/2025</p>
                <p>Triển khai OpenNebula và RTMP streaming trên mạng nội bộ, kiểm thử khả năng phân phối tài nguyên và tính sẵn sàng cao.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About