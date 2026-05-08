/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Anchor, 
  Waves, 
  Ship, 
  Award, 
  Languages, 
  Briefcase, 
  GraduationCap, 
  User, 
  Mail, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter,
  ChevronRight,
  ExternalLink,
  Box,
  Layers,
  Cuboid,
  Calendar,
  MapPin,
  Plane,
  Compass,
  Palmtree,
  Presentation,
  FileText,
  Layout,
  ChevronLeft,
  Video,
  Play,
  Cpu,
  Sparkles,
  Zap,
  MonitorPlay
} from 'lucide-react';

// --- Types ---
interface Experience {
  period: string;
  title: string;
  description?: string;
}

interface Certification {
  name: string;
}

interface ModelItem {
  title: string;
  category: string;
  image: string;
  description: string;
}

// --- Components ---

const SectionHeader = ({ icon: Icon, title, id }: { icon: any, title: string, id?: string }) => (
  <div id={id} className="flex items-center gap-3 mb-8 group">
    <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h2>
    <div className="flex-1 h-px bg-gray-200 ml-4"></div>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = React.useState<'resume' | 'models' | 'holiday' | 'ppt' | 'video'>('resume');
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const experiences: Experience[] = [
    { period: '2019 ~ 現在', title: 'YMCA 游泳教學', description: '負責游泳教學與相關水域安全指導。' },
  ];

  const internships: Experience[] = [
    { period: '2025-05 ~ 2025-06', title: '御風輪實習', description: '航海實務操作與環境適應實習。' },
  ];

  const certifications: Certification[] = [
    { name: '基安證照' },
    { name: '醫療急救' },
    { name: '基礎滅火' },
    { name: '救生艇' },
    { name: '保全證照' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Background waves decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setActiveTab('resume')}
          >
            <span className="font-bold text-lg tracking-tight">BO HAN CHEN</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <button 
              onClick={() => setActiveTab('resume')}
              className={`hover:text-blue-600 transition-colors ${activeTab === 'resume' ? 'text-blue-600' : ''}`}
            >
              個人履歷
            </button>
            <button 
              onClick={() => setActiveTab('models')}
              className={`hover:text-blue-600 transition-colors ${activeTab === 'models' ? 'text-blue-600' : ''}`}
            >
              3D 模型
            </button>
            <button 
              onClick={() => setActiveTab('holiday')}
              className={`hover:text-blue-600 transition-colors ${activeTab === 'holiday' ? 'text-blue-600' : ''}`}
            >
              連假計畫
            </button>
            <button 
              onClick={() => setActiveTab('ppt')}
              className={`hover:text-blue-600 transition-colors ${activeTab === 'ppt' ? 'text-blue-600' : ''}`}
            >
              連假 PPT
            </button>
            <button 
              onClick={() => setActiveTab('video')}
              className={`hover:text-blue-600 transition-colors ${activeTab === 'video' ? 'text-blue-600' : ''}`}
            >
              AI 影片
            </button>
          </div>
          <a 
            href="mailto:A111182110@nkust.edu.tw" 
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            連繫我
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {activeTab === 'resume' ? (
            <motion.div
              key="resume"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 flex flex-col md:flex-row items-center gap-12"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
                    <img 
                      src="https://drive.google.com/thumbnail?id=1r7xWDyF5tryzif0b4Jo3reYGrGBVRHVY&sz=w1000" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                    <Waves size={14} />
                    Navigation Student
                  </div>
                  <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-2 tracking-tight">
                    陳柏翰 <span className="text-blue-600 font-light">CHEN BO HAN</span>
                  </h1>
                  <p className="text-xl text-gray-500 font-medium mb-6">巨蟹座 | O型 | 2007-06-24</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                    <a href="#" className="p-3 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all"><Linkedin size={20} /></a>
                    <a href="#" className="p-3 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-pink-600 hover:border-pink-200 hover:shadow-sm transition-all"><Instagram size={20} /></a>
                    <a href="#" className="p-3 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-red-600 hover:border-red-200 hover:shadow-sm transition-all"><Youtube size={20} /></a>
                    <a href="#" className="p-3 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-blue-800 hover:border-blue-200 hover:shadow-sm transition-all"><Facebook size={20} /></a>
                    <a href="#" className="p-3 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-sky-500 hover:border-sky-200 hover:shadow-sm transition-all"><Twitter size={20} /></a>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                    目前就讀於航技系，對航海領域有濃厚興趣。希望能透過態度與實作經驗的累積，持續提升專業能力，朝相關領域發展。
                  </p>
                </div>
              </motion.section>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-12 gap-12"
              >
                {/* Left Column */}
                <div className="md:col-span-8 space-y-20">
                  {/* Experience Section */}
                  <section id="experience">
                    <SectionHeader icon={Briefcase} title="實務與工作經驗" />
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">實習經歷</h3>
                        <div className="grid gap-4">
                          {internships.map((item, index) => (
                            <Card key={index} className="flex gap-6 items-start">
                              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                <Ship size={24} />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-400 mb-1">{item.period}</div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">打工經驗</h3>
                        <div className="grid gap-4">
                          {experiences.map((item, index) => (
                            <Card key={index} className="flex gap-6 items-start">
                              <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 shrink-0">
                                <Waves size={24} />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-400 mb-1">{item.period}</div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Autobiography */}
                  <section id="about">
                    <SectionHeader icon={User} title="自傳" />
                    <Card className="prose prose-blue max-w-none">
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                          我目前就讀於國立高雄科技大學航技系，現在是專四學生。回顧這幾年的學習過程，我覺得自己不是那種特別耀眼的學生，但我願意為該做的事情負責，也會盡力把事情完成好。
                        </p>
                        <p>
                          我從小就對各種車輛和船隻有興趣，平常看到不同車款，會去注意它們的外型和結構。雖然現在就讀的是航海體系，但在學習機械相關的課程時，常常能把內容和自己熟悉的車子聯想在一起，這也讓我比較能理解課程重點，而不是只是死背。
                        </p>
                        <p>
                          在專業課程的學習上，有些內容一開始並不容易，尤其是需要耐心與細心的部分。我通常會花比較多時間確認細節，遇到不懂的地方也會再多看幾次講義，或詢問同學與老師，確保自己是真的理解，而不是為了應付考試。
                        </p>
                        <p>
                          此外，我過去曾參加過學校的游泳隊。游泳隊的訓練讓我學會自我要求，也讓我習慣在規律的安排下完成每天該做的事。這段經驗讓我在面對課業或其他壓力時，比較能保持穩定的心態，不會輕易放棄。
                        </p>
                        <p>
                          未來，我希望能繼續在航海相關領域持續累積實務能力，把基礎打好。比起追求快速成果，我更重視學習過程與做事態度，希望自己能成為一個做事踏實、值得信任的人。
                        </p>
                      </div>
                    </Card>
                  </section>
                </div>

                {/* Right Column */}
                <div className="md:col-span-4 space-y-12">
                  {/* Education */}
                  <section>
                    <SectionHeader icon={GraduationCap} title="學歷" />
                    <Card>
                      <div className="text-sm font-medium text-blue-600 mb-1">2022-09 ~ 2027-06</div>
                      <h4 className="font-bold text-lg mb-1">高雄科技大學</h4>
                      <div className="text-gray-600">航海學系 (在學)</div>
                    </Card>
                  </section>

                  {/* Skills & Languages */}
                  <section id="skills">
                    <SectionHeader icon={Languages} title="語言與技能" />
                    <div className="space-y-6">
                      <Card>
                        <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">語言能力</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-lg text-sm font-semibold text-blue-700">
                                英文
                              </span>
                              <span className="text-xs font-bold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded border border-blue-100/50">
                                TOEIC 990
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-700">
                                國語
                              </span>
                              <span className="text-xs text-gray-500 font-medium">
                                已經學了第19年
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card>
                        <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">專業技能</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">游泳</span>
                              <span className="text-blue-600">精通</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '95%' }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-blue-500 rounded-full"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">航海實務</span>
                              <span className="text-blue-600">進修中</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '65%' }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="h-full bg-cyan-500 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </section>

                  {/* Certifications */}
                  <section id="certifications">
                    <SectionHeader icon={Award} title="專業證照" />
                    <div className="grid gap-3">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
                        >
                          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                            <Award size={16} />
                          </div>
                          <span className="font-semibold text-gray-800">{cert.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </div>
              </motion.div>
            </motion.div>
          ) : activeTab === 'models' ? (
            <motion.div
              key="models"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Models content... */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                  3D 模型
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tripo3D 作品",
                    category: "數位建模",
                    description: "使用 Tripo3D 創作的相關 3D 模型，展示精密構造與設計特點。",
                    image: "https://images.unsplash.com/photo-1544474677-dc323c347b2c?q=80&w=600&auto=format&fit=crop",
                    url: "https://studio.tripo3d.ai/3d-model/563f41d9-8400-4408-8f48-3ccfe4dab704?invite_code=LJM4JY"
                  }
                ].map((model: any, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={model.image} 
                        alt={model.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600 shadow-sm">
                          {model.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{model.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {model.description}
                      </p>
                      {model.url ? (
                        <a 
                          href={model.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all"
                        >
                          在 Tripo3D 中查看 <ExternalLink size={16} />
                        </a>
                      ) : (
                        <button className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                          查看詳情 <ChevronRight size={16} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Card className="bg-blue-600 border-none text-white p-12 text-center overflow-hidden relative">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <Layers size={48} className="mx-auto mb-6 text-blue-200" />
                  <h2 className="text-3xl font-black mb-4">更多模型開發中</h2>
                  <p className="text-blue-100 mb-8 max-w-md mx-auto">
                    我正致力於將更多航海實習中的觀察轉化為精確的 3D 數位資產。
                  </p>
                  <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl">
                    訂閱更新
                  </button>
                </div>
              </Card>
            </motion.div>
          ) : activeTab === 'holiday' ? (
            <motion.div
              key="holiday"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto space-y-16 py-8"
            >
              <div className="text-center mb-20">
                <h1 className="text-5xl font-black text-gray-900 tracking-tight">
                  連假計畫
                </h1>
              </div>

              <div className="prose prose-lg max-w-none space-y-20">
                <section className="space-y-6">
                  <h2 className="text-3xl font-black text-blue-600 flex items-center gap-3">
                    體驗一：湛藍太平洋 (七星潭)
                  </h2>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">中文概念</span>
                      <p className="text-gray-700 font-medium leading-relaxed">蔚藍的太平洋海浪緩緩拍打著七星潭的平滑礫石灘。陽光在水面上閃爍。低角度拍攝，慢動作，電影級光影，呈現寧靜的氛圍。</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">英文指令 (Prompt)</span>
                      <p className="text-sm font-mono text-gray-500 italic bg-gray-50 p-4 rounded-xl">Crystal clear blue Pacific Ocean waves gently crashing onto a smooth pebble beach at Qixingtan. Sunlight sparkling on the water surface. Low angle shot, slow motion, cinematic lighting, peaceful and relaxing vibe, 4k resolution, highly detailed.</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-black text-cyan-600 flex items-center gap-3">
                    ⛰️ 體驗二：壯闊大理石峽谷 (太魯閣)
                  </h2>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">中文概念</span>
                      <p className="text-gray-700 font-medium leading-relaxed">一條清澈的翠綠色溪流流過太魯閣國家公園宏偉的大理石峽谷。鬱鬱蔥蔥的綠色植物生長在白色的岩壁上。緩慢平移運鏡，國家地理雜誌風格，極致細節。</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">英文指令 (Prompt)</span>
                      <p className="text-sm font-mono text-gray-500 italic bg-gray-50 p-4 rounded-xl">A pristine turquoise river flowing through a majestic white marble gorge in Taroko National Park. Lush green vegetation clinging to the textured rock walls. Slow panning shot, cinematic, National Geographic documentary style, extreme detail, 8k.</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-black text-green-600 flex items-center gap-3">
                    ✨ 體驗三：夜間魔幻螢光 (大農大富)
                  </h2>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">中文概念</span>
                      <p className="text-gray-700 font-medium leading-relaxed">夜晚漆黑的平地森林中，成千上萬隻發光的螢火蟲在空中飛舞閃爍。充滿魔幻與浪漫的氣氛，柔和的綠色光點漂浮著。縮時攝影風格，童話森林感。</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-green-500 uppercase tracking-widest">英文指令 (Prompt)</span>
                      <p className="text-sm font-mono text-gray-500 italic bg-gray-50 p-4 rounded-xl">Thousands of glowing fireflies illuminating a pitch-black forest at night. Magical and romantic atmosphere, soft glowing green light particles floating in the air. Time-lapse photography style, cinematic, enchanted forest vibe, unreal engine 5 render style, 4k.</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-black text-orange-600 flex items-center gap-3">
                    🌾 體驗四：縱谷黃金稻浪 (池上伯朗大道)
                  </h2>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">中文概念</span>
                      <p className="text-gray-700 font-medium leading-relaxed">廣闊的黃金稻田在微風中如海浪般搖曳，遠方是壯麗的綠色山脈。一條筆直的鄉間小路穿過稻田。無人機空拍視角，晴朗的天空，色彩鮮豔，節奏緩慢。</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">英文指令 (Prompt)</span>
                      <p className="text-sm font-mono text-gray-500 italic bg-gray-50 p-4 rounded-xl">A vast field of golden vibrant rice paddies swaying like waves in the gentle breeze, with majestic green mountains in the background. A straight, empty countryside road cutting through the fields. Aerial drone shot, sunny day with blue sky, vibrant colors, cinematic, slow-paced and free.</p>
                    </div>
                  </div>
                </section>

                <section className="pt-12 border-t border-gray-100">
                  <div className="bg-blue-50/50 p-10 rounded-[2.5rem] border border-blue-100 space-y-6">
                    <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
                      <Sparkles className="text-blue-600" /> 💡 影片生成進階建議
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 shrink-0"></div>
                        <p className="text-gray-700">如果您想將這些片段剪輯成一支完整的 VLOG 或預告片，建議統一使用 <span className="font-bold text-blue-600">Cinematic (電影感)</span> 或是相同的畫面比例 (如 16:9)，這樣組合起來的風格會更一致。</p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 shrink-0"></div>
                        <p className="text-gray-700">您可以搭配旅行當下錄製的白噪音（如海浪聲、蟲鳴聲），會讓 AI 生成的畫面更加栩栩如生！</p>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </motion.div>
          ) : activeTab === 'ppt' ? (
            <motion.div
              key="ppt"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                  連假專題簡報
                </h1>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="aspect-[16/9] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <iframe 
                    src="https://docs.google.com/presentation/d/14WHYQjYAAfBdsKasWtwbTOZIItWuLNAA6FBGkzgyqnk/embed?start=false&loop=false&delayms=3000" 
                    frameBorder="0" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen={true}
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true"
                    title="連假計畫PPT"
                  ></iframe>
                </div>
              </div>

              <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 mt-8">
                <Card className="flex-1 p-6 flex gap-4 items-center bg-white">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <MonitorPlay size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">互動簡報播放</h4>
                    <p className="text-xs text-gray-500">直接在網頁中切換投影片與觀看內容</p>
                  </div>
                </Card>
                <Card className="flex-1 p-6 flex gap-4 items-center bg-white border-blue-100">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <Presentation size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">連假專題內容</h4>
                    <p className="text-xs text-gray-500">包含計畫、心得與未來展望</p>
                  </div>
                </Card>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                  AI 影片
                </h1>
              </div>

              <div className="max-w-5xl mx-auto space-y-12">
                <div className="aspect-video w-full bg-black rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <iframe
                    src="https://drive.google.com/file/d/1dz7ITeiIhecXR0c8SUTM7yUK1KjEr0Fj/preview"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    className="border-none"
                    title="AI 影片作品"
                  ></iframe>
                </div>

                <Card className="p-8 border-blue-100 bg-blue-50/30">
                  <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-blue-900">
                    <Sparkles className="text-blue-600" /> 影片生成進階建議
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                        <MonitorPlay size={20} />
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        如果您想將這些片段剪輯成一支完整的 VLOG 或預告片，建議統一使用 <span className="text-blue-600 font-bold">Cinematic (電影感)</span> 或是相同的畫面比例 (如 16:9)，這樣組合起來的風格會更一致。
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 shrink-0">
                        <Waves size={20} />
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        您可以搭配旅行當下錄製的白噪音（如海浪聲、蟲鳴聲），會讓 AI 生成的畫面更加栩栩如生！
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-center">
                  <Video size={48} className="text-gray-200 mb-4" />
                  <p className="text-gray-400 font-medium italic">「技術是畫筆，想像力是畫布，AI 讓兩者完美融合。」</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-gray-900 text-white py-20 mt-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Anchor className="mx-auto text-blue-400 mb-6" size={40} />
          <h2 className="text-3xl font-black mb-4 tracking-tight">陳柏翰 CHEN BO HAN</h2>
          <div className="flex flex-col items-center gap-4 mb-12 mt-8">
            <a 
              href="mailto:A111182110@nkust.edu.tw" 
              className="flex items-center gap-2 text-xl font-medium hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
              A111182110@nkust.edu.tw
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500">© 2026 陳柏翰 CHEN BO HAN. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
