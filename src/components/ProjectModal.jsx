import React from 'react'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaServer, FaUbuntu, FaDocker, FaGit, FaSlack, FaNodeJs, FaReact} from 'react-icons/fa'
import { IoLogoBuffer } from 'react-icons/io'
import { SiAnsible, SiFastapi, SiGithubactions, SiGrafana, SiK3S, SiMqtt, SiOpennebula, SiOpenstack, SiPrometheus } from 'react-icons/si'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null

  const getIconForTech = (tech) => {
    const techIcons = {
      'Git':FaGit,
      'Github': FaGithub,
      'Github Actions': SiGithubactions,
      'K3s': SiK3S,
      'Docker': FaDocker,
      'OpenStack': SiOpenstack,
      'EMQX': SiMqtt,
      'Prometheus': SiPrometheus,
      'Grafana': SiGrafana,
      'Loki': IoLogoBuffer,
      'Ansible': SiAnsible,
      'OpenNebula': SiOpennebula,
      'RTMP': FaServer,
      'Ubuntu': FaUbuntu,
      'Slack': FaSlack,
      'NodeJs': FaNodeJs,
      'FastAPI': SiFastapi,
      'React': FaReact
    }
    return techIcons[tech] || FaCode
  }

  const renderProjectDetails = () => {
    if (project.id === 1) {
      // DevOps cho tái cấu hình IoT - Multiple repos
      return (
        <div className="project-details">
          <div className="project-overview">
            <h3>Hệ thống DevOps tối ưu cho IoT với kiến trúc 3 tầng</h3>
            <p>Nghiên cứu xây dựng kiến trúc hệ thống DevOps tối ưu dành cho IoT, đảm bảo khả năng tự động hóa, linh hoạt và dễ mở rộng với 5 repository chuyên biệt:</p>
            <ul className="overview-features">
              <li><strong>ESP32 Firmware (esp32-firmware-ci):</strong> Thiết bị thật ESP32 WROOM-32, tự động build firmware và push xuống OTA server qua GitHub Actions</li>
              <li><strong>ESP32 OTA Server (web-server-for-firmware-management):</strong> Node.js server cung cấp file .bin và API quản lý log/update/status cho ESP32</li>
              <li><strong>Raspberry Pi Agent (Agent-RasPi):</strong> Thiết bị mô phỏng bằng Docker container, tự động update Docker images và hệ điều hành</li>
              <li><strong>Raspberry Pi Backend (Backend-Server-RasPi):</strong> FastAPI server quản lý containers, logs và system resources</li>
              <li><strong>Raspberry Pi Frontend (Frontend-RasPi):</strong> React dashboard theo dõi trạng thái RasPi device, logs và trigger updates</li>
            </ul>
          </div>
          
          <div className="repos-section">
            <h4>Hệ thống IoT hoàn chỉnh với 5 repository:</h4>
            <div className="repos-grid">
              <div className="repo-item main-repo">
                <div className="repo-header">
                  <h5>esp32-firmware-ci</h5>
                  <span className="repo-type">ESP32 Firmware</span>
                </div>
                <p>Firmware ESP32 với CI/CD tự động, MQTT communication và OTA updates. Tự động build và push firmware xuống edge server.</p>
                <div className="repo-tech">
                  <span className="tech-badge">C++</span>
                  <span className="tech-badge">PlatformIO</span>
                  <span className="tech-badge">MQTT</span>
                  <span className="tech-badge">OTA</span>
                </div>
                <a href="https://github.com/taipham2710/esp32-firmware-ci" target="_blank" rel="noopener noreferrer" className="repo-link">
                  <FaGithub /> Xem repository
                </a>
              </div>

              <div className="repo-item main-repo">
                <div className="repo-header">
                  <h5>Agent-RasPi</h5>
                  <span className="repo-type">Raspberry Pi Agent</span>
                </div>
                <p>Agent chạy trên Raspberry Pi, tự động build Docker images mới và update containers. Quản lý kết nối MQTT và system monitoring.</p>
                <div className="repo-tech">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">Docker</span>
                  <span className="tech-badge">MQTT</span>
                  <span className="tech-badge">CI/CD</span>
                </div>
                <a href="https://github.com/taipham2710/Agent-RasPi" target="_blank" rel="noopener noreferrer" className="repo-link">
                  <FaGithub /> Xem repository
                </a>
              </div>

              <div className="repo-item main-repo">
                <div className="repo-header">
                  <h5>web-server-for-firmware-management</h5>
                  <span className="repo-type">ESP32 Web Server</span>
                </div>
                <p>Web server riêng biệt để lưu trữ và quản lý firmware cho ESP32. Cung cấp OTA updates và version management cho ESP32 devices.</p>
                <div className="repo-tech">
                  <span className="tech-badge">Web Server</span>
                  <span className="tech-badge">Firmware Storage</span>
                  <span className="tech-badge">OTA Management</span>
                  <span className="tech-badge">ESP32 Specific</span>
                </div>
                <a href="https://github.com/taipham2710/web-server-for-firmware-management" target="_blank" rel="noopener noreferrer" className="repo-link">
                  <FaGithub /> Xem repository
                </a>
              </div>

              <div className="repo-item main-repo">
                <div className="repo-header">
                  <h5>Frontend-RasPi</h5>
                  <span className="repo-type">Raspberry Pi Frontend</span>
                </div>
                <p>Giao diện người dùng riêng biệt cho hệ thống Raspberry Pi, hiển thị status, logs và quản lý containers của Raspberry Pi.</p>
                <div className="repo-tech">
                  <span className="tech-badge">Frontend</span>
                  <span className="tech-badge">Dashboard</span>
                  <span className="tech-badge">Real-time</span>
                  <span className="tech-badge">Raspberry Pi</span>
                </div>
                <a href="https://github.com/taipham2710/Frontend-RasPi" target="_blank" rel="noopener noreferrer" className="repo-link">
                  <FaGithub /> Xem repository
                </a>
              </div>

              <div className="repo-item main-repo">
                <div className="repo-header">
                  <h5>Backend-Server-RasPi</h5>
                  <span className="repo-type">Raspberry Pi Backend</span>
                </div>
                <p>Backend server riêng biệt cung cấp API cho frontend Raspberry Pi, quản lý containers, logs và system resources của Raspberry Pi.</p>
                <div className="repo-tech">
                  <span className="tech-badge">Backend</span>
                  <span className="tech-badge">API</span>
                  <span className="tech-badge">Container Management</span>
                  <span className="tech-badge">Raspberry Pi</span>
                </div>
                <a href="https://github.com/taipham2710/Backend-Server-RasPi" target="_blank" rel="noopener noreferrer" className="repo-link">
                  <FaGithub /> Xem repository
                </a>
              </div>
            </div>
          </div>

          <div className="project-architecture">
            <h4>Kiến trúc hệ thống 3 tầng: Device - Edge - Cloud/CI/CD</h4>
            <div className="architecture-diagram">
              <div className="arch-layer cloud-layer">
                <h5>Cloud/CI/CD Layer</h5>
                <p>GitHub Actions: Tự động build firmware ESP32 + Docker images RasPi</p>
                <p>Docker Hub: Registry lưu trữ images</p>
              </div>
              <div className="arch-layer edge-layer">
                <h5>Edge Layer (K3s Cluster)</h5>
                <p>3 máy ảo Ubuntu 22.04 trên OpenStack + K3s (1 master + 2 workers)</p>
                <p>Services: EMQX MQTT Broker, Prometheus + Grafana, Loki Stack, OTA Server ESP32, Web Server RasPi</p>
              </div>
              <div className="arch-layer device-layer">
                <h5>Device Layer</h5>
                <p>ESP32 WROOM-32 (thật) + Raspberry Pi (mô phỏng Docker container)</p>
                <p>Giao tiếp qua MQTT và HTTP REST</p>
              </div>
            </div>
          </div>

          <div className="research-objectives">
            <h4>Mục tiêu nghiên cứu chính:</h4>
            <ul className="objectives-list">
              <li><strong>Tự động hóa CI/CD:</strong> Xây dựng quy trình CI/CD phù hợp với đặc thù thiết bị IoT</li>
              <li><strong>Kiến trúc tối ưu:</strong> Thiết kế hệ thống DevOps đảm bảo linh hoạt và dễ mở rộng</li>
              <li><strong>Triển khai thực tế:</strong> Thử nghiệm trên ESP32 thật và RasPi mô phỏng</li>
              <li><strong>Bảo mật:</strong> Tích hợp giải pháp bảo mật trong quá trình cập nhật phần mềm</li>
              <li><strong>Giám sát toàn diện:</strong> Prometheus + Grafana + Loki Stack cho monitoring và logging</li>
              <li><strong>Thông báo real-time:</strong> Tích hợp Slack notifications cho trạng thái update</li>
            </ul>
          </div>

          <div className="tech-stack">
            <h4>Stack công nghệ sử dụng:</h4>
            <div className="tech-categories">
              <div className="tech-category">
                <h5>Infrastructure & Orchestration</h5>
                <div className="tech-tags">
                  <span className="tech-tag">K3s (Kubernetes)</span>
                  <span className="tech-tag">OpenStack</span>
                  <span className="tech-tag">Ubuntu 22.04</span>
                  <span className="tech-tag">Ansible</span>
                </div>
              </div>
              <div className="tech-category">
                <h5>Monitoring & Logging</h5>
                <div className="tech-tags">
                  <span className="tech-tag">Prometheus</span>
                  <span className="tech-tag">Grafana</span>
                  <span className="tech-tag">Loki Stack</span>
                  <span className="tech-tag">EMQX MQTT</span>
                </div>
              </div>
              <div className="tech-category">
                <h5>Development & CI/CD</h5>
                <div className="tech-tags">
                  <span className="tech-tag">GitHub Actions</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (project.id === 2) {
      // OpenNebula project
      return (
        <div className="project-details">
          <div className="project-overview">
            <h3>Hệ thống Streaming đa node trên OpenNebula</h3>
            <p>Triển khai môi trường live streaming nội bộ với kiến trúc phân tầng Ingest Server + Edge Nodes, cho phép phân phối luồng RTMP/HLS đa điểm với khả năng mở rộng cao.</p>
            <ul className="overview-features">
              <li><strong>Kiến trúc 3 tầng:</strong> Ingest Server nhận RTMP, Edge Nodes phân phối nội dung</li>
              <li><strong>Mạng phẳng:</strong> Sử dụng bridge network (192.168.100.0/24) cho giao tiếp trực tiếp</li>
              <li><strong>Tự động hóa:</strong> Triển khai hoàn toàn bằng Ansible với SSH không mật khẩu</li>
              <li><strong>Load balancing:</strong> Phân tán tải giữa các node để tối ưu hiệu suất</li>
            </ul>
          </div>

          <div className="repos-section">
            <h4>Repository chính:</h4>
            <div className="repo-item main-repo">
              <div className="repo-header">
                <FaGithub className="repo-icon" />
                <h5>one-deploy</h5>
                <span className="repo-type">OpenNebula Deployment</span>
              </div>
              <p>Repository chứa toàn bộ cấu hình Ansible, scripts triển khai OpenNebula.</p>
              <div className="repo-tech">
                <span className="tech-badge">OpenNebula</span>
                <span className="tech-badge">Ansible</span>
                <span className="tech-badge">Ubuntu 22.04</span>
              </div>
              <a href="https://github.com/taipham2710/one-deploy" target="_blank" rel="noopener noreferrer" className="repo-link">
                <FaGithub /> Xem repository
              </a>
            </div>
          </div>

          <div className="project-architecture">
            <h4>Kiến trúc hệ thống:</h4>
            <div className="architecture-diagram">
              <div className="arch-layer cloud-layer">
                <h5>Frontend Node (192.168.100.102)</h5>
                <p>Máy chủ điều khiển OpenNebula, chứa OneDeploy và Ansible</p>
                <p>Quản lý toàn bộ cluster và triển khai tự động</p>
              </div>
              <div className="arch-layer edge-layer">
                <h5>Hypervisor Nodes (4 máy chủ)</h5>
                <p>Node 2: 192.168.100.150 (Hosting streaming-vm1)</p>
                <p>Node 3: 192.168.100.121 (Hosting streaming-vm2)</p>
                <p>Node 4: 192.168.100.130 (Hosting streaming-vm3)</p>
                <p>Node 5: 192.168.100.109 (Backup node)</p>
              </div>
              <div className="arch-layer device-layer">
                <h5>Streaming VMs (3 máy ảo)</h5>
                <p>streaming-vm1 (192.168.100.160): Ingest Server nhận RTMP</p>
                <p>streaming-vm2 (192.168.100.155): Edge Node phân phối</p>
                <p>streaming-vm3 (192.168.100.156): Edge Node phân phối</p>
              </div>
            </div>
          </div>

          <div className="streaming-workflow">
            <h4>Luồng hoạt động streaming:</h4>
            <div className="workflow-steps">
              <div className="workflow-step">
                <h5>1. Ingest Phase</h5>
                <p>Streamer gửi RTMP đến <code>rtmp://192.168.100.160/live/stream</code></p>
                <p>streaming-vm1 nhận luồng và chuyển đổi sang HLS format</p>
                <p>Lưu trữ segments (.ts) và playlist (.m3u8) tại <code>/tmp/hls</code></p>
              </div>
              <div className="workflow-step">
                <h5>2. Distribution Phase</h5>
                <p>FFmpeg trên streaming-vm1 push luồng RTMP đến các Edge Nodes</p>
                <p>streaming-vm2 nhận luồng từ streaming-vm1</p>
                <p>streaming-vm3 nhận luồng từ streaming-vm1</p>
              </div>
              <div className="workflow-step">
                <h5>3. Edge Delivery</h5>
                <p>Người xem truy cập từ bất kỳ Edge Node nào:</p>
                <p><code>rtmp://192.168.100.155/live/test</code> (streaming-vm2)</p>
                <p><code>rtmp://192.168.100.156/live/test</code> (streaming-vm3)</p>
              </div>
            </div>
          </div>

          <div className="deployment-config">
            <h4>Cấu hình triển khai:</h4>
            <div className="config-sections">
              <div className="config-section">
                <h5>Network Configuration</h5>
                <ul>
                  <li><strong>Mô hình mạng:</strong> Bridged network (ens33 → br0)</li>
                  <li><strong>IP range:</strong> 192.168.100.0/24</li>
                  <li><strong>Static IP:</strong> Tất cả nodes có IP tĩnh</li>
                  <li><strong>SSH:</strong> Passwordless SSH giữa Frontend và Hypervisors</li>
                </ul>
              </div>
              <div className="config-section">
                <h5>OpenNebula Setup</h5>
                <ul>
                  <li><strong>OneDeploy:</strong> Cài đặt qua pipx và hatch</li>
                  <li><strong>Virtual Environments:</strong> default và ceph</li>
                  <li><strong>Ansible:</strong> host_key_checking=false, pipelining=true</li>
                  <li><strong>Privileges:</strong> NOPASSWD sudo cho automation</li>
                </ul>
              </div>
              <div className="config-section">
                <h5>Streaming Services</h5>
                <ul>
                  <li><strong>Nginx RTMP:</strong> Module xử lý RTMP streams</li>
                  <li><strong>HLS Conversion:</strong> Tự động chuyển RTMP → HLS</li>
                  <li><strong>FFmpeg:</strong> Re-streaming giữa các nodes</li>
                  <li><strong>Load Balancing:</strong> Phân tán tải theo địa lý</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-description-section">
            <h3>Mô tả chi tiết</h3>
            <p>Project xây dựng hệ thống live streaming nội bộ trên hạ tầng ảo hóa OpenNebula. Kiến trúc gồm một Ingest Server tiếp nhận luồng RTMP từ streamer và hai Edge Nodes chịu trách nhiệm phân phối luồng đến người xem. Luồng được chuyển đổi sang HLS để đảm bảo khả năng tương thích, đồng thời sử dụng FFmpeg để re-stream và phân phối giữa các node. Toàn bộ quá trình cài đặt và cấu hình (OpenNebula, VM, dịch vụ Nginx RTMP/FFmpeg, network) được tự động hóa bằng Ansible nhằm đảm bảo khả năng tái lập, mở rộng và vận hành ổn định.</p>
          </div>

          <div className="project-features">
            <h4>Kỹ năng đã áp dụng</h4>
            <ul>
              <li>Thiết kế kiến trúc streaming 3 tầng (Ingest/Edge) tối ưu cho nội bộ</li>
              <li>Triển khai hạ tầng ảo hóa với OpenNebula + KVM, quản trị Frontend/Hypervisors</li>
              <li>Tự động hóa bằng Ansible: inventory, roles, playbooks, idempotent tasks</li>
              <li>Cấu hình Linux networking: bridged network, static IP, Netplan</li>
              <li>Thiết lập Nginx RTMP, FFmpeg cho ingest, transcode và re-streaming</li>
              <li>Quan sát hệ thống với Prometheus/Grafana, chuẩn hóa logs</li>
              <li>Quy trình vận hành, khắc phục sự cố và tài liệu hóa triển khai</li>
            </ul>
          </div>

          <div className="project-features">
            <h4>Deliverables</h4>
            <ul>
              <li>Bộ Ansible đầy đủ: <em>inventory</em>, <em>ansible.cfg</em>, roles/playbooks triển khai OpenNebula và dịch vụ streaming</li>
              <li>Cụm OpenNebula hoạt động: Frontend node và các Hypervisor nodes đã cấu hình</li>
              <li>3 VM streaming (vm1 Ingest, vm2/vm3 Edge) kèm cấu hình Nginx RTMP, FFmpeg</li>
              <li>Cấu hình network bridge br0, IP tĩnh cho toàn bộ nodes/VM</li>
              <li>Thư mục HLS đầu ra và mẫu URLs truy cập RTMP/HLS cho người xem</li>
              <li>Tài liệu hướng dẫn triển khai/vận hành và sơ đồ kiến trúc, workflow</li>
            </ul>
          </div>

          <div className="tech-stack">
            <h4>Stack công nghệ chi tiết:</h4>
            <div className="tech-categories">
              <div className="tech-category">
                <h5>Virtualization & Cloud</h5>
                <div className="tech-tags">
                  <span className="tech-tag">OpenNebula 6.8+</span>
                  <span className="tech-tag">KVM Hypervisor</span>
                  <span className="tech-tag">Ubuntu 22.04</span>
                  <span className="tech-tag">Netplan ≥0.105</span>
                </div>
              </div>
              <div className="tech-category">
                <h5>Automation & Deployment</h5>
                <div className="tech-tags">
                  <span className="tech-tag">Ansible</span>
                  <span className="tech-tag">OneDeploy</span>
                  <span className="tech-tag">Hatch</span>
                  <span className="tech-tag">SSH Keys</span>
                </div>
              </div>
              <div className="tech-category">
                <h5>Streaming & Media</h5>
                <div className="tech-tags">
                  <span className="tech-tag">Nginx RTMP Module</span>
                  <span className="tech-tag">FFmpeg</span>
                  <span className="tech-tag">HLS (.m3u8, .ts)</span>
                  <span className="tech-tag">RTMP Protocol</span>
                </div>
              </div>
              <div className="tech-category">
                <h5>Network & Security</h5>
                <div className="tech-tags">
                  <span className="tech-tag">Bridge Network</span>
                  <span className="tech-tag">Static IP</span>
                  <span className="tech-tag">SSH Key Authentication</span>
                  <span className="tech-tag">Sudo NOPASSWD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits-section">
            <h4>Lợi ích của kiến trúc:</h4>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h5>🚀 Khả năng mở rộng</h5>
                <p>Dễ dàng thêm Edge Nodes mới để phục vụ nhiều người xem hơn</p>
              </div>
              <div className="benefit-item">
                <h5>⚖️ Phân bổ tải</h5>
                <p>Chia tải giữa nhiều máy chủ, giảm nguy cơ quá tải</p>
              </div>
              <div className="benefit-item">
                <h5>🌐 Tối ưu băng thông</h5>
                <p>Luồng chỉ gửi một lần đến Ingest Server, sau đó phân phối nội bộ</p>
              </div>
              <div className="benefit-item">
                <h5>🔧 Tự động hóa</h5>
                <p>Triển khai hoàn toàn tự động với Ansible, giảm lỗi thủ công</p>
              </div>
              <div className="benefit-item">
                <h5>📱 Đa giao thức</h5>
                <p>Hỗ trợ cả RTMP và HLS, tương thích với nhiều thiết bị</p>
              </div>
              <div className="benefit-item">
                <h5>🛡️ Bảo mật</h5>
                <p>Mạng nội bộ riêng, SSH key authentication, quyền truy cập kiểm soát</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="modal-content">
          <div className="project-image-section">
            <img src={project.image} alt={project.title} className="project-modal-image" />
            <div className="project-badges">
              <span className="tech-count">{project.technologies.length} technologies</span>
            </div>
          </div>
          
          <div className="project-description-section">
            <h3>Mô tả dự án</h3>
            <p>{project.description}</p>
            
            <div className="project-technologies-section">
              <h4>Technologies sử dụng:</h4>
              <div className="tech-grid">
                {project.technologies.map((tech, index) => {
                  const Icon = getIconForTech(tech)
                  return (
                    <div key={index} className="tech-item">
                      <Icon className="tech-icon" />
                      <span>{tech}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {renderProjectDetails()}
          </div>
        </div>
        
        <div className="modal-footer">
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaGithub /> Xem trên GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FaExternalLinkAlt /> Xem demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
