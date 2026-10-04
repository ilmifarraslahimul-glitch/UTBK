/**
 * Belajarku - Modern UTBK Study Dashboard Logic
 */

// Types & Interfaces
export interface Profile {
  name: string;
  univ: string;
  major: string;
  targetScore: number;
  motivation: string;
  logoB64: string;
}

export interface SubjectItem {
  id: string;
  name: string;
  icon?: string;
  isCustom?: boolean;
}

export interface CustomAchievement {
  id: string;
  title: string;
  desc: string;
  req: number;
  icon: string;
  type: 'streak' | 'sesi' | 'to' | 'salah' | 'skor' | 'custom';
  isCustom?: boolean;
}

export interface StudyLog {
  id: number;
  date: string;
  category: string;
  durationHours: string | number;
  questions?: string | number;
  location?: string;
  bookTitle?: string;
  bookPages?: string;
  notes?: string;
  photos?: number[];
  bookCoverPhotoId?: number | null;
  questionPhotoIds?: number[];
}

export interface PlannerTask {
  id: number;
  date: string;
  category: string;
  title: string;
  done: boolean;
}

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

export interface MistakeItem {
  id: number;
  subtest: string;
  material: string;
  question: string;
  answer: string;
  reason: string;
}

export interface TOLog {
  id: number;
  type: 'utbk' | 'inten';
  title: string;
  date: string;
  scores: Record<string, number>;
  average: string | number;
  notes?: string;
}

export interface AppData {
  profile: Profile;
  subjects?: SubjectItem[];
  customAchievements?: CustomAchievement[];
  studyLogs: StudyLog[];
  plannerTasks: PlannerTask[];
  todoItems: TodoItem[];
  mistakes: MistakeItem[];
  toLogs: TOLog[];
  unlockedAchievements: string[];
}

// Default Subjects
export const DEFAULT_SUBJECTS: SubjectItem[] = [
  { id: 'sub_pu', name: 'Penalaran Umum (PU)', icon: '🧠' },
  { id: 'sub_pbm', name: 'Pemahaman Bacaan & Menulis (PBM)', icon: '📖' },
  { id: 'sub_ppu', name: 'Pengetahuan & Pemahaman Umum (PPU)', icon: '💡' },
  { id: 'sub_pk', name: 'Pengetahuan Kuantitatif (PK)', icon: '🔢' },
  { id: 'sub_lindo', name: 'Literasi Bahasa Indonesia', icon: '🇮🇩' },
  { id: 'sub_leng', name: 'Literasi Bahasa Inggris', icon: '🇬🇧' },
  { id: 'sub_pm', name: 'Penalaran Matematika', icon: '📐' },
  { id: 'sub_fisika', name: 'Fisika', icon: '⚡' },
  { id: 'sub_kimia', name: 'Kimia', icon: '🧪' },
  { id: 'sub_biologi', name: 'Biologi', icon: '🧬' },
  { id: 'sub_matematika', name: 'Matematika', icon: '📊' },
  { id: 'sub_ekonomi', name: 'Ekonomi', icon: '💰' },
  { id: 'sub_sosiologi', name: 'Sosiologi', icon: '👥' },
  { id: 'sub_geografi', name: 'Geografi', icon: '🌍' },
  { id: 'sub_sejarah', name: 'Sejarah', icon: '🏛️' },
];

// Default Base Achievements
export const DEFAULT_ACHIEVEMENTS = [
  // Streak
  { id: 'streak_1', title: 'Pemula Konsisten', desc: 'Belajar 1 hari', type: 'streak', req: 1, icon: '🌱' },
  { id: 'streak_3', title: 'Pemanasan', desc: 'Belajar 3 hari beruntun', type: 'streak', req: 3, icon: '🔥' },
  { id: 'streak_7', title: '7 Hari Konsisten', desc: 'Belajar 7 hari beruntun', type: 'streak', req: 7, icon: '⚡' },
  { id: 'streak_14', title: 'Dua Minggu Fokus', desc: 'Belajar 14 hari beruntun', type: 'streak', req: 14, icon: '🚀' },
  { id: 'streak_30', title: 'Sebulan Penuh', desc: 'Belajar 30 hari beruntun', type: 'streak', req: 30, icon: '🏆' },
  { id: 'streak_60', title: 'Tak Terhentikan', desc: 'Belajar 60 hari beruntun', type: 'streak', req: 60, icon: '👑' },
  { id: 'streak_100', title: 'Legenda Belajar', desc: 'Belajar 100 hari beruntun', type: 'streak', req: 100, icon: '🌟' },
  // Sesi Belajar
  { id: 'sesi_1', title: 'Langkah Pertama', desc: 'Selesaikan 1 sesi belajar', type: 'sesi', req: 1, icon: '🎯' },
  { id: 'sesi_10', title: 'Mulai Terbiasa', desc: 'Selesaikan 10 sesi belajar', type: 'sesi', req: 10, icon: '📚' },
  { id: 'sesi_25', title: 'Pejuang Ilmu', desc: 'Selesaikan 25 sesi belajar', type: 'sesi', req: 25, icon: '⚔️' },
  { id: 'sesi_50', title: 'Ratusan Jam', desc: 'Selesaikan 50 sesi belajar', type: 'sesi', req: 50, icon: '🛡️' },
  { id: 'sesi_100', title: 'Master Sesi', desc: 'Selesaikan 100 sesi belajar', type: 'sesi', req: 100, icon: '💎' },
  // Tryout
  { id: 'to_1', title: 'Uji Nyali', desc: 'Mengikuti 1 TO', type: 'to', req: 1, icon: '📝' },
  { id: 'to_5', title: 'Suka Tantangan', desc: 'Mengikuti 5 TO', type: 'to', req: 5, icon: '📊' },
  { id: 'to_10', title: 'Evaluasi Rutin', desc: 'Mengikuti 10 TO', type: 'to', req: 10, icon: '📈' },
  { id: 'to_20', title: 'Gladiator TO', desc: 'Mengikuti 20 TO', type: 'to', req: 20, icon: '🥇' },
  { id: 'to_50', title: 'Dewa Tryout', desc: 'Mengikuti 50 TO', type: 'to', req: 50, icon: '🌌' },
  // Skor UTBK
  { id: 'skor_first', title: 'Pecah Telur', desc: 'Mendapat skor TO pertama', type: 'skor', req: 1, icon: '🐣' },
  { id: 'skor_500', title: 'Tembus 500', desc: 'Mencapai skor UTBK 500', type: 'skor', req: 500, icon: '🥉' },
  { id: 'skor_600', title: 'Tembus 600', desc: 'Mencapai skor UTBK 600', type: 'skor', req: 600, icon: '🥈' },
  { id: 'skor_700', title: 'Tembus 700', desc: 'Mencapai skor UTBK 700', type: 'skor', req: 700, icon: '🥇' },
  { id: 'skor_800', title: 'Tembus 800', desc: 'Mencapai skor UTBK 800', type: 'skor', req: 800, icon: '🏆' },
  { id: 'skor_900', title: 'Tembus 900', desc: 'Mencapai skor UTBK 900', type: 'skor', req: 900, icon: '✨' },
  // Bank Kesalahan
  { id: 'salah_5', title: 'Belajar Salah', desc: 'Mencatat 5 materi salah', type: 'salah', req: 5, icon: '🔍' },
  { id: 'salah_10', title: 'Evaluasi Diri', desc: 'Mencatat 10 materi salah', type: 'salah', req: 10, icon: '💡' },
  { id: 'salah_25', title: 'Makin Paham', desc: 'Mencatat 25 materi salah', type: 'salah', req: 25, icon: '🧩' },
  { id: 'salah_50', title: 'Analis Ahli', desc: 'Mencatat 50 materi salah', type: 'salah', req: 50, icon: '🔬' },
  { id: 'salah_100', title: 'Master Evaluasi', desc: 'Mencatat 100 materi salah', type: 'salah', req: 100, icon: '🎓' }
];

export const utbkSubtests = ['PU', 'PBM', 'PPU', 'PK', 'Literasi B. Indo', 'Literasi B. Inggris', 'Penalaran MTK'];
export const intenSubjects = ['PU', 'PK', 'B. Indonesia', 'B. Inggris', 'Matematika', 'Fisika', 'Kimia', 'Biologi'];

// Application State
export let appData: AppData = {
  profile: { name: '', univ: '', major: '', targetScore: 700, motivation: '', logoB64: '' },
  subjects: [...DEFAULT_SUBJECTS],
  customAchievements: [],
  studyLogs: [],
  plannerTasks: [],
  todoItems: [],
  mistakes: [],
  toLogs: [],
  unlockedAchievements: []
};

export let currentTOType: 'utbk' | 'inten' = 'utbk';
export let currentProgressType: 'utbk' | 'inten' = 'utbk';
export let calendarCurrentDate = new Date();

let trendChartInstance: any = null;
let subtestChartInstance: any = null;
let categoryChartInstance: any = null;

// IndexedDB Photo Storage
let db: IDBDatabase | null = null;
export function initDB(): Promise<IDBDatabase | null> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("BelajarkuPhotosDB", 1);
    request.onupgradeneeded = (e: any) => {
      db = e.target.result;
      if (db && !db.objectStoreNames.contains("photos")) {
        db.createObjectStore("photos", { keyPath: "id", autoIncrement: true });
      }
    };
    request.onsuccess = (e: any) => {
      db = e.target.result;
      resolve(db);
    };
    request.onerror = (e) => reject(e);
  });
}

export function savePhotoToIDB(blobOrBase64: any): Promise<number | null> {
  return new Promise((resolve) => {
    if (!db) return resolve(null);
    try {
      const tx = db.transaction("photos", "readwrite");
      const store = tx.objectStore("photos");
      const req = store.add({ data: blobOrBase64, createdAt: new Date() });
      req.onsuccess = (e: any) => resolve(e.target.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

export function getPhotoFromIDB(id: number): Promise<string | null> {
  return new Promise((resolve) => {
    if (!id || !db) return resolve(null);
    try {
      const tx = db.transaction("photos", "readonly");
      const store = tx.objectStore("photos");
      const req = store.get(id);
      req.onsuccess = (e: any) => resolve(e.target.result ? e.target.result.data : null);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

// Toast Notifications
export function showToast(message: string, type: 'success' | 'achievement' | 'error' | 'info' = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');

  let icon = '<i class="fas fa-check-circle text-emerald-500"></i>';
  let bgColor = 'bg-white dark:bg-slate-900';
  let textColor = 'text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-800';

  if (type === 'achievement') {
    icon = '<i class="fas fa-trophy text-amber-300"></i>';
    bgColor = 'bg-gradient-to-r from-amber-500 to-amber-600';
    textColor = 'text-white border-amber-400';
  } else if (type === 'error') {
    icon = '<i class="fas fa-exclamation-triangle text-rose-500"></i>';
  } else if (type === 'info') {
    icon = '<i class="fas fa-info-circle text-blue-500"></i>';
  }

  toast.className = `toast-enter flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border ${bgColor} ${textColor} text-xs font-semibold backdrop-blur-md`;
  toast.innerHTML = `<span class="text-base">${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Local Storage Load & Save
export function performOneTimeReset() {
  const hasReset = localStorage.getItem('belajarku_v4_reset_done');
  if (!hasReset) {
    if (!localStorage.getItem('belajarku_app_data')) {
      localStorage.setItem('belajarku_app_data', JSON.stringify(appData));
    }
    localStorage.setItem('belajarku_v4_reset_done', 'true');
  }
}

export function loadAppData() {
  performOneTimeReset();
  const saved = localStorage.getItem('belajarku_app_data');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appData = {
        ...appData,
        ...parsed,
        profile: { ...appData.profile, ...(parsed.profile || {}) },
        subjects: parsed.subjects && parsed.subjects.length > 0 ? parsed.subjects : [...DEFAULT_SUBJECTS],
        customAchievements: parsed.customAchievements || [],
        studyLogs: parsed.studyLogs || [],
        plannerTasks: parsed.plannerTasks || [],
        todoItems: parsed.todoItems || [],
        mistakes: parsed.mistakes || [],
        toLogs: parsed.toLogs || [],
        unlockedAchievements: parsed.unlockedAchievements || []
      };
    } catch (e) {
      console.error(e);
    }
  } else {
    appData.subjects = [...DEFAULT_SUBJECTS];
  }
}

export function saveAppData() {
  localStorage.setItem('belajarku_app_data', JSON.stringify(appData));
}

// Streak Calculation
export function calculateStreak(): number {
  const logs = appData.studyLogs || [];
  if (logs.length === 0) return 0;
  const dates = [...new Set(logs.map(l => l.date))].sort().reverse();
  const checkDate = new Date();
  let checkStr = checkDate.toISOString().split('T')[0];
  let streak = 0;
  if (!dates.includes(checkStr)) {
    checkDate.setDate(checkDate.getDate() - 1);
    checkStr = checkDate.toISOString().split('T')[0];
  }
  while (dates.includes(checkStr)) {
    streak++;
    checkDate.setDate(checkDate.getDate() - 1);
    checkStr = checkDate.toISOString().split('T')[0];
  }
  return streak;
}

// Achievement Evaluation
export function getAllAchievements() {
  const defaults = DEFAULT_ACHIEVEMENTS.map(a => ({ ...a, isCustom: false }));
  const customs = (appData.customAchievements || []).map(a => ({ ...a, isCustom: true }));
  return [...defaults, ...customs];
}

export function checkAchievements() {
  const newUnlocks: any[] = [];
  const totalSesi = (appData.studyLogs || []).length;
  const totalTO = (appData.toLogs || []).length;
  const totalSalah = (appData.mistakes || []).length;
  const utbkLogs = (appData.toLogs || []).filter(t => t.type === 'utbk');
  const maxSkor = utbkLogs.length > 0 ? Math.max(...utbkLogs.map(t => parseFloat(String(t.average)) || 0)) : 0;
  const currentStreak = calculateStreak();
  const totalQuestions = (appData.studyLogs || []).reduce((acc, curr) => acc + (parseInt(String(curr.questions)) || 0), 0);

  const all = getAllAchievements();

  all.forEach(ach => {
    if (!appData.unlockedAchievements.includes(ach.id)) {
      let earned = false;
      if (ach.type === 'streak' && currentStreak >= ach.req) earned = true;
      if (ach.type === 'sesi' && totalSesi >= ach.req) earned = true;
      if (ach.type === 'to' && totalTO >= ach.req) earned = true;
      if (ach.type === 'skor' && maxSkor >= ach.req) earned = true;
      if (ach.type === 'salah' && totalSalah >= ach.req) earned = true;
      if (ach.type === 'custom') {
        if (totalSesi >= ach.req || currentStreak >= ach.req || totalQuestions >= ach.req) earned = true;
      }

      if (earned) {
        appData.unlockedAchievements.push(ach.id);
        newUnlocks.push(ach);
      }
    }
  });

  if (newUnlocks.length > 0) {
    saveAppData();
    newUnlocks.forEach(ach => showToast(`Pencapaian Terbuka: ${ach.title}`, 'achievement'));
    const p8 = document.getElementById('page-8');
    if (p8 && !p8.classList.contains('hidden')) {
      renderBadges();
    }
  }
}

// Subject Management & Integration
export function updateSubjectDropdowns() {
  const subjects = appData.subjects && appData.subjects.length > 0 ? appData.subjects : DEFAULT_SUBJECTS;
  
  // Update Calendar Category dropdown
  const calSelect = document.getElementById('cal-category') as HTMLSelectElement | null;
  if (calSelect) {
    const currentVal = calSelect.value;
    calSelect.innerHTML = subjects.map(s => `<option value="${s.name}">${s.icon ? s.icon + ' ' : ''}${s.name}</option>`).join('');
    if (currentVal && Array.from(calSelect.options).some(o => o.value === currentVal)) {
      calSelect.value = currentVal;
    }
  }

  // Update Study Category dropdown
  const studySelect = document.getElementById('study-category') as HTMLSelectElement | null;
  if (studySelect) {
    const currentVal = studySelect.value;
    studySelect.innerHTML = subjects.map(s => `<option value="${s.name}">${s.icon ? s.icon + ' ' : ''}${s.name}</option>`).join('');
    if (currentVal && Array.from(studySelect.options).some(o => o.value === currentVal)) {
      studySelect.value = currentVal;
    }
  }

  // Update Planner Category dropdown
  const plannerSelect = document.getElementById('planner-category') as HTMLSelectElement | null;
  if (plannerSelect) {
    const currentVal = plannerSelect.value;
    plannerSelect.innerHTML = subjects.map(s => `<option value="${s.name}">${s.icon ? s.icon + ' ' : ''}${s.name}</option>`).join('');
    if (currentVal && Array.from(plannerSelect.options).some(o => o.value === currentVal)) {
      plannerSelect.value = currentVal;
    }
  }

  // Update Mistake Subtest dropdown
  const mistakeSelect = document.getElementById('mistake-subtest') as HTMLSelectElement | null;
  if (mistakeSelect) {
    const currentVal = mistakeSelect.value;
    mistakeSelect.innerHTML = subjects.map(s => `<option value="${s.name}">${s.icon ? s.icon + ' ' : ''}${s.name}</option>`).join('');
    if (currentVal && Array.from(mistakeSelect.options).some(o => o.value === currentVal)) {
      mistakeSelect.value = currentVal;
    }
  }
}

// Navigation & Theme
export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  if ((window as any).lucide) (window as any).lucide.createIcons();
}

export function initTheme() {
  const isDark = localStorage.getItem('theme') !== 'light';
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  }
}


export function toggleMobileSidebar() {
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('mobile-sidebar-overlay');
  if (!sidebar || !overlay) return;
  if (sidebar.classList.contains('-translate-x-full')) {
    overlay.classList.remove('hidden');
    setTimeout(() => {
      overlay.classList.remove('opacity-0');
      sidebar.classList.remove('-translate-x-full');
    }, 10);
  } else {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.classList.add('hidden'), 300);
  }
}

export function mobileSwitchTab(tabNum: number) {
  toggleMobileSidebar();
  switchTab(tabNum);
}

// Note: Page 3 (Mulai Belajar) was removed per requirement 7.
// Valid tabs: 1 (Beranda), 2 (Kalender), 4 (Belajar Harian), 5 (Bank Kesalahan), 6 (Tryout), 7 (Progress), 8 (Pencapaian), 9 (Pengaturan), 10 (Tentang)
export function switchTab(tabNum: number) {
  // If user calls switchTab(3), redirect to 4 (Belajar Harian)
  if (tabNum === 3) tabNum = 4;

  const validTabs = [1, 2, 4, 5, 6, 7, 8, 9, 10];
  validTabs.forEach(i => {
    const page = document.getElementById(`page-${i}`);
    if (page) page.classList.add('hidden');
    const nav = document.getElementById(`nav-${i}`);
    if (nav) nav.classList.remove('bg-indigo-50', 'dark:bg-indigo-950/40', 'text-indigo-600', 'dark:text-indigo-400', 'font-bold');
    const mNav = document.getElementById(`m-nav-${i}`);
    if (mNav) mNav.classList.remove('bg-indigo-600', 'text-white', 'font-bold');
  });

  const targetPage = document.getElementById(`page-${tabNum}`);
  if (targetPage) targetPage.classList.remove('hidden');
  const targetNav = document.getElementById(`nav-${tabNum}`);
  if (targetNav) targetNav.classList.add('bg-indigo-50', 'dark:bg-indigo-950/40', 'text-indigo-600', 'dark:text-indigo-400', 'font-bold');
  const targetMNav = document.getElementById(`m-nav-${tabNum}`);
  if (targetMNav) targetMNav.classList.add('bg-indigo-600', 'text-white', 'font-bold');

  if (tabNum === 1) updateDashboard();
  if (tabNum === 2) renderCalendar();
  if (tabNum === 4) updateSubjectDropdowns();
  if (tabNum === 5) { updateSubjectDropdowns(); renderMistakes(); }
  if (tabNum === 6) renderTOTable();
  if (tabNum === 7) renderProgressPage();
  if (tabNum === 8) renderBadges();
  if (tabNum === 9) { loadSettingsForm(); renderSubjectManagementList(); renderCustomAchievementList(); }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if ((window as any).lucide) (window as any).lucide.createIcons();
}

// Live UTBK Countdown Ticker
let utbkTickerInterval: any = null;

export function updateCountdownTick() {
  const targetUtbk = new Date('2027-05-01T00:00:00');
  const now = new Date();
  const diffMs = Math.max(0, targetUtbk.getTime() - now.getTime());
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const countEl = document.getElementById('dash-utbk-countdown');
  if (countEl) countEl.innerText = String(diffDays);

  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  const timeEl = document.getElementById('dash-utbk-time-countdown');
  if (timeEl) {
    timeEl.innerText = `${String(hours).padStart(2, '0')}j : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}d`;
  }
}

export function startCountdownTicker() {
  if (!utbkTickerInterval) {
    utbkTickerInterval = setInterval(() => {
      updateCountdownTick();
    }, 1000);
  }
}

// Dashboard Update
export function updateDashboard() {
  const p = appData.profile || { name: '', univ: '', major: '', targetScore: 700, motivation: '', logoB64: '' };
  const nameEl = document.getElementById('dash-user-name');
  if (nameEl) nameEl.innerText = p.name || 'Siswa Ambis';

  const univEl = document.getElementById('dash-target-univ');
  if (univEl) univEl.innerText = p.univ || 'Belum Diatur';

  const majorEl = document.getElementById('dash-target-major');
  if (majorEl) majorEl.innerText = p.major || 'Belum Diatur';

  const scoreEl = document.getElementById('dash-target-score');
  if (scoreEl) scoreEl.innerText = String(p.targetScore || 700);

  const motEl = document.getElementById('dash-motivation');
  if (motEl) motEl.innerText = p.motivation ? `"${p.motivation}"` : '"Belum ada motivasi yang diatur di Pengaturan."';

  const logoImg = document.getElementById('dash-univ-logo') as HTMLImageElement | null;
  const logoHolder = document.getElementById('dash-logo-placeholder');
  if (logoImg && logoHolder) {
    if (p.logoB64) {
      logoImg.src = p.logoB64;
      logoImg.classList.remove('hidden');
      logoHolder.classList.add('hidden');
    } else {
      logoImg.classList.add('hidden');
      logoHolder.classList.remove('hidden');
    }
  }

  // UTBK Countdown
  updateCountdownTick();
  startCountdownTicker();

  const logs = appData.studyLogs || [];

  const totalHours = logs.reduce((acc, curr) => acc + (parseFloat(String(curr.durationHours)) || 0), 0);
  const totalQuestions = logs.reduce((acc, curr) => acc + (parseInt(String(curr.questions)) || 0), 0);
  const timeEl = document.getElementById('dash-total-time');
  if (timeEl) timeEl.innerText = `${totalHours.toFixed(1)} Jam`;
  const qEl = document.getElementById('dash-total-questions');
  if (qEl) qEl.innerText = `${totalQuestions} Soal`;

  const utbkTOs = (appData.toLogs || []).filter(t => t.type === 'utbk');
  const toEl = document.getElementById('dash-total-to');
  if (toEl) toEl.innerText = `${utbkTOs.length} Kali`;

  const avgEl = document.getElementById('dash-avg-score');
  if (avgEl) {
    if (utbkTOs.length > 0) {
      const sum = utbkTOs.reduce((acc, curr) => acc + (parseFloat(String(curr.average)) || 0), 0);
      avgEl.innerHTML = String(Math.round(sum / utbkTOs.length));
    } else {
      avgEl.innerHTML = '<span class="text-xs text-slate-400 font-medium">Belum Ada</span>';
    }
  }

  const streak = calculateStreak();
  const flameHtml = streak > 0 ? `<span class="animate-flame text-amber-500 drop-shadow-md">🔥</span>` : `<span class="opacity-40 grayscale text-slate-400">🔥</span>`;
  const streakEl = document.getElementById('dash-streak');
  if (streakEl) streakEl.innerHTML = `${flameHtml} ${streak} Hari`;

  const recentContainer = document.getElementById('dash-recent-list');
  if (recentContainer) {
    if (logs.length === 0) {
      recentContainer.innerHTML = `<p class="text-slate-400 text-xs italic">Belum ada catatan aktivitas belajar.</p>`;
    } else {
      recentContainer.innerHTML = [...logs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3).map(l => `
        <div class="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800/80 flex justify-between items-center text-xs">
          <div>
            <p class="font-bold text-slate-800 dark:text-slate-200">${l.category}</p>
            <p class="text-[10px] text-slate-400">${l.date} • ${l.durationHours} jam • ${l.questions || 0} soal</p>
          </div>
          <span class="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg text-[10px]">${l.location || 'Rumah'}</span>
        </div>
      `).join('');
    }
  }
}

// Lightbox & Pinch Zoom (Zoom hint text removed per requirement 8, pinch/drag/zoom preserved)
let imgElement: HTMLImageElement | null = null;
let lbScale = 1;
let lbX = 0, lbY = 0;
const lbPointers = new Map<number, { x: number; y: number }>();
let lbLastDist = 0;
let lbLastMid: { x: number; y: number } | null = null;
let lbDragStart: { x: number; y: number; startX: number; startY: number } | null = null;
let lbLastTapTime = 0;
const LB_MIN_SCALE = 1;
const LB_MAX_SCALE = 4;

function lbApplyTransform() {
  if (imgElement) imgElement.style.transform = `translate(${lbX}px, ${lbY}px) scale(${lbScale})`;
}

function lbClamp() {
  const container = document.getElementById('lightbox-img-container');
  if (!container || !imgElement) return;
  const rect = container.getBoundingClientRect();
  const maxX = (rect.width * (lbScale - 1)) / 2 + rect.width * 0.15;
  const maxY = (rect.height * (lbScale - 1)) / 2 + rect.height * 0.15;
  lbX = Math.max(-maxX, Math.min(maxX, lbX));
  lbY = Math.max(-maxY, Math.min(maxY, lbY));
}

export function lbReset() {
  lbScale = 1; lbX = 0; lbY = 0;
  lbPointers.clear(); lbLastDist = 0; lbLastMid = null; lbDragStart = null;
  if (imgElement) {
    imgElement.classList.remove('dragging');
    lbApplyTransform();
  }
}

export function openLightbox(imageSrc: string) {
  const lightbox = document.getElementById('photo-lightbox');
  imgElement = document.getElementById('lightbox-img') as HTMLImageElement;
  if (lightbox && imgElement) {
    imgElement.src = imageSrc;
    lbReset();
    lightbox.classList.remove('hidden');
    initPinchZoom();
  }
}

export function closeLightbox() {
  document.getElementById('photo-lightbox')?.classList.add('hidden');
  lbReset();
}

export function initPinchZoom() {
  const container = document.getElementById('lightbox-img-container');
  if (!container || !imgElement || container.dataset.lbInit === '1') return;
  container.dataset.lbInit = '1';
  const getMid = (p1: any, p2: any) => ({ x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 });
  const getDist = (p1: any, p2: any) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

  container.addEventListener('pointerdown', (e: PointerEvent) => {
    container.setPointerCapture(e.pointerId);
    lbPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (lbPointers.size === 1) {
      const now = Date.now();
      if (now - lbLastTapTime < 300) {
        if (lbScale > 1) { lbScale = 1; lbX = 0; lbY = 0; } else { lbScale = 2.5; }
        lbApplyTransform();
        lbLastTapTime = 0;
        return;
      }
      lbLastTapTime = now;
      lbDragStart = { x: e.clientX, y: e.clientY, startX: lbX, startY: lbY };
      if (imgElement) imgElement.classList.add('dragging');
    } else if (lbPointers.size === 2) {
      const pts = Array.from(lbPointers.values());
      lbLastDist = getDist(pts[0], pts[1]);
      lbLastMid = getMid(pts[0], pts[1]);
      lbDragStart = null;
    }
  });

  container.addEventListener('pointermove', (e: PointerEvent) => {
    if (!lbPointers.has(e.pointerId)) return;
    lbPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (lbPointers.size === 2) {
      e.preventDefault();
      const pts = Array.from(lbPointers.values());
      const dist = getDist(pts[0], pts[1]);
      const mid = getMid(pts[0], pts[1]);
      if (lbLastDist > 0) {
        const factor = dist / lbLastDist;
        lbScale = Math.max(LB_MIN_SCALE, Math.min(lbScale * factor, LB_MAX_SCALE));
      }
      if (lbLastMid) {
        lbX += mid.x - lbLastMid.x;
        lbY += mid.y - lbLastMid.y;
      }
      lbLastDist = dist;
      lbLastMid = mid;
      lbClamp();
      lbApplyTransform();
    } else if (lbPointers.size === 1 && lbDragStart) {
      e.preventDefault();
      const dx = e.clientX - lbDragStart.x;
      const dy = e.clientY - lbDragStart.y;
      lbX = lbDragStart.startX + dx;
      lbY = lbDragStart.startY + dy;
      lbClamp();
      lbApplyTransform();
    }
  });

  const endPointer = (e: PointerEvent) => {
    lbPointers.delete(e.pointerId);
    if (lbPointers.size < 2) { lbLastDist = 0; lbLastMid = null; }
    if (lbPointers.size === 0) {
      if (imgElement) imgElement.classList.remove('dragging');
      lbDragStart = null;
      if (lbScale <= 1) { lbScale = 1; lbX = 0; lbY = 0; lbApplyTransform(); }
    }
  };
  container.addEventListener('pointerup', endPointer);
  container.addEventListener('pointercancel', endPointer);
  container.addEventListener('pointerleave', endPointer);

  container.addEventListener('wheel', (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) lbScale = Math.min(lbScale + 0.3, LB_MAX_SCALE);
    else lbScale = Math.max(lbScale - 0.3, LB_MIN_SCALE);
    if (lbScale <= 1) { lbX = 0; lbY = 0; }
    lbClamp();
    lbApplyTransform();
  }, { passive: false });
}

// Calendar System
export function changeMonth(delta: number) {
  calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + delta);
  renderCalendar();
}

export function renderCalendar() {
  const year = calendarCurrentDate.getFullYear();
  const month = calendarCurrentDate.getMonth();
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const titleEl = document.getElementById('calendar-month-year');
  if (titleEl) titleEl.innerText = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div class="h-20 sm:h-24 bg-slate-50/50 dark:bg-slate-950/20 rounded-2xl border border-slate-100 dark:border-slate-800/40"></div>`;
  }

  const todayStr = new Date().toISOString().split('T')[0];
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayLogs = (appData.studyLogs || []).filter(l => l.date === dateStr);
    const dayTOs = (appData.toLogs || []).filter(t => t.date === dateStr);
    const isToday = dateStr === todayStr;

    let bgColor = 'bg-rose-500/10 dark:bg-rose-950/20 border-rose-200/60 dark:border-rose-900/30';
    let badgeText = 'Off';
    let textColor = 'text-rose-600 dark:text-rose-400';

    if (dayTOs.length > 0) {
      bgColor = 'bg-purple-500/10 dark:bg-purple-950/30 border-purple-300/60 dark:border-purple-800/40';
      badgeText = `${dayTOs.length} TO`;
      textColor = 'text-purple-600 dark:text-purple-300';
    } else if (dayLogs.length > 0) {
      bgColor = 'bg-emerald-500/10 dark:bg-emerald-950/30 border-emerald-300/60 dark:border-emerald-800/40';
      badgeText = `${dayLogs.length} Sesi`;
      textColor = 'text-emerald-600 dark:text-emerald-300';
    }

    let hasPhoto = false;
    let totalHours = 0;
    dayLogs.forEach(l => {
      totalHours += parseFloat(String(l.durationHours)) || 0;
      if ((l.photos && l.photos.length > 0) || l.bookCoverPhotoId || (l.questionPhotoIds && l.questionPhotoIds.length > 0)) hasPhoto = true;
    });

    grid.innerHTML += `
      <div onclick="window.selectCalendarDate('${dateStr}')" class="h-20 sm:h-24 p-2 ${bgColor} rounded-2xl border ${isToday ? 'ring-2 ring-indigo-500 shadow-sm' : ''} hover:scale-[1.02] cursor-pointer transition flex flex-col justify-between overflow-hidden">
        <div class="flex justify-between items-center">
          <span class="text-xs font-bold ${isToday ? 'text-indigo-600 dark:text-indigo-400 underline' : 'text-slate-800 dark:text-slate-200'}">${day}</span>
          ${hasPhoto ? '<span class="text-[10px]">📷</span>' : ''}
        </div>
        <div class="space-y-0.5">
          <div class="text-[9px] font-bold ${textColor} truncate">${badgeText}</div>
          ${totalHours > 0 ? `<div class="text-[9px] text-slate-400 font-semibold">${totalHours.toFixed(1)}j</div>` : ''}
        </div>
      </div>`;
  }
}

export async function selectCalendarDate(dateStr: string) {
  const selectedInput = document.getElementById('cal-selected-date') as HTMLInputElement | null;
  if (selectedInput) selectedInput.value = dateStr;
  const titleEl = document.getElementById('detail-date-title');
  if (titleEl) titleEl.innerText = `Detail Tanggal: ${dateStr}`;
  const detailCard = document.getElementById('calendar-detail-card');
  if (detailCard) detailCard.classList.remove('hidden');

  const detailContent = document.getElementById('detail-content');
  if (!detailContent) return;

  const logs = (appData.studyLogs || []).filter(l => l.date === dateStr);
  const toLogs = (appData.toLogs || []).filter(t => t.date === dateStr);

  if (logs.length === 0 && toLogs.length === 0) {
    detailContent.innerHTML = `<p class="text-rose-400 text-xs italic">Tidak ada aktivitas belajar atau Tryout pada tanggal ini.</p>`;
    return;
  }

  let html = '';
  toLogs.forEach(t => {
    html += `
      <div class="p-3 bg-purple-500/10 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50 space-y-1 text-xs">
        <div class="flex justify-between items-center font-bold text-purple-600 dark:text-purple-300">
          <span>🏆 ${t.title} (${t.type.toUpperCase()})</span>
          <span>Rata-Rata: ${t.average}</span>
        </div>
        <p class="text-[11px] text-slate-400">${t.notes || 'Tidak ada catatan TO.'}</p>
      </div>`;
  });

  for (const l of logs) {
    let photoHtml = '';
    if (l.bookCoverPhotoId) {
      const coverB64 = await getPhotoFromIDB(l.bookCoverPhotoId);
      if (coverB64) {
        photoHtml += `<div class="mt-2"><p class="text-[10px] font-bold text-slate-400 uppercase mb-1">📕 Sampul Buku</p><img src="${coverB64}" onclick="window.openLightbox('${coverB64}')" class="w-14 h-14 object-cover rounded-xl border border-slate-300 dark:border-slate-700 cursor-pointer hover:scale-105 transition"></div>`;
      }
    }
    if (l.photos && l.photos.length > 0) {
      photoHtml += '<p class="text-[10px] font-bold text-slate-400 uppercase mt-2 mb-1">📷 Foto Belajar</p><div class="flex flex-wrap gap-2">';
      for (const photoId of l.photos) {
        const b64 = await getPhotoFromIDB(photoId);
        if (b64) photoHtml += `<img src="${b64}" onclick="window.openLightbox('${b64}')" class="w-14 h-14 object-cover rounded-xl border border-slate-300 dark:border-slate-700 cursor-pointer hover:scale-105 transition">`;
      }
      photoHtml += '</div>';
    }
    if (l.questionPhotoIds && l.questionPhotoIds.length > 0) {
      photoHtml += '<p class="text-[10px] font-bold text-slate-400 uppercase mt-2 mb-1">📝 Foto Soal / Catatan</p><div class="flex flex-wrap gap-2">';
      for (const photoId of l.questionPhotoIds) {
        const b64 = await getPhotoFromIDB(photoId);
        if (b64) photoHtml += `<img src="${b64}" onclick="window.openLightbox('${b64}')" class="w-14 h-14 object-cover rounded-xl border border-slate-300 dark:border-slate-700 cursor-pointer hover:scale-105 transition">`;
      }
      photoHtml += '</div>';
    }

    html += `
      <div class="p-3.5 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 text-xs relative">
        <div class="flex justify-between items-center font-bold text-slate-800 dark:text-slate-200">
          <span>📖 ${l.category}</span>
          <div class="flex items-center gap-2">
            <span class="text-emerald-500 mr-2 font-bold">${l.durationHours} Jam</span>
            <button onclick="window.editCalendarLog(${l.id})" class="text-indigo-500 hover:text-indigo-400" title="Edit"><i class="fas fa-edit"></i></button>
            <button onclick="window.confirmDeleteCal(${l.id})" class="text-rose-500 hover:text-rose-400" title="Hapus"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
        ${l.bookTitle ? `<p class="text-slate-500 dark:text-slate-400 text-[11px]">Buku: ${l.bookTitle} (${l.bookPages || '-'})</p>` : ''}
        ${l.notes ? `<p class="text-slate-600 dark:text-slate-300 italic text-[11px]">"${l.notes}"</p>` : ''}
        ${photoHtml}
      </div>`;
  }
  detailContent.innerHTML = html;
}

export function closeDetailCard() {
  document.getElementById('calendar-detail-card')?.classList.add('hidden');
}

export function openCalendarAddForm() {
  updateSubjectDropdowns();
  (document.getElementById('calendar-add-form') as HTMLFormElement)?.reset();
  (document.getElementById('cal-edit-id') as HTMLInputElement).value = '';
  document.getElementById('cal-photo-hint')?.classList.add('hidden');
  const btn = document.getElementById('cal-submit-btn');
  if (btn) btn.innerText = 'Simpan Aktivitas';
  document.getElementById('calendar-add-form')?.classList.remove('hidden');
}

export function closeCalendarAddForm() {
  document.getElementById('calendar-add-form')?.classList.add('hidden');
}

export function editCalendarLog(id: number) {
  const log = appData.studyLogs.find(l => l.id === id);
  if (!log) return;
  updateSubjectDropdowns();
  (document.getElementById('cal-edit-id') as HTMLInputElement).value = String(id);
  (document.getElementById('cal-category') as HTMLSelectElement).value = log.category;
  (document.getElementById('cal-duration') as HTMLInputElement).value = String(log.durationHours);
  (document.getElementById('cal-questions') as HTMLInputElement).value = String(log.questions || '');
  (document.getElementById('cal-title') as HTMLInputElement).value = log.bookTitle || '';
  (document.getElementById('cal-notes') as HTMLTextAreaElement).value = log.notes || '';
  document.getElementById('cal-photo-hint')?.classList.remove('hidden');
  const btn = document.getElementById('cal-submit-btn');
  if (btn) btn.innerText = 'Simpan Perubahan';
  document.getElementById('calendar-add-form')?.classList.remove('hidden');
}

let deleteCalId: number | null = null;
export function confirmDeleteCal(id: number) {
  deleteCalId = id;
  document.getElementById('confirm-delete-cal-modal')?.classList.remove('hidden');
}

export function cancelDeleteCal() {
  document.getElementById('confirm-delete-cal-modal')?.classList.add('hidden');
  deleteCalId = null;
}

export async function performDeleteCal() {
  const dateStr = (document.getElementById('cal-selected-date') as HTMLInputElement).value;
  appData.studyLogs = appData.studyLogs.filter(l => l.id !== deleteCalId);
  saveAppData();
  cancelDeleteCal();
  selectCalendarDate(dateStr);
  renderCalendar();
  updateDashboard();
  checkAchievements();
  showToast('✓ Data berhasil dihapus');
}

export async function saveCalendarSession(e: any) {
  e.preventDefault();
  const editId = (document.getElementById('cal-edit-id') as HTMLInputElement).value;
  const date = (document.getElementById('cal-selected-date') as HTMLInputElement).value;
  const category = (document.getElementById('cal-category') as HTMLSelectElement).value;
  const durationHours = (document.getElementById('cal-duration') as HTMLInputElement).value;
  const questions = (document.getElementById('cal-questions') as HTMLInputElement).value;
  const bookTitle = (document.getElementById('cal-title') as HTMLInputElement).value;
  const notes = (document.getElementById('cal-notes') as HTMLTextAreaElement).value;

  const photoFiles = (document.getElementById('cal-photos') as HTMLInputElement).files;

  let finalPhotos: number[] = [];
  if (editId) {
    const existing = appData.studyLogs.find(l => l.id == Number(editId));
    if (existing && existing.photos) finalPhotos = existing.photos;
  }

  if (photoFiles && photoFiles.length > 0) {
    finalPhotos = [];
    for (let i = 0; i < photoFiles.length; i++) {
      const b64 = await fileToBase64(photoFiles[i]);
      const id = await savePhotoToIDB(b64);
      if (id) finalPhotos.push(id);
    }
  }

  if (editId) {
    const idx = appData.studyLogs.findIndex(l => l.id == Number(editId));
    appData.studyLogs[idx] = { ...appData.studyLogs[idx], category, durationHours, questions, bookTitle, notes, photos: finalPhotos };
    showToast('✓ Data berhasil diperbarui');
  } else {
    appData.studyLogs.push({ id: Date.now(), date, category, durationHours, questions, bookTitle, notes, photos: finalPhotos });
    showToast('✓ Data berhasil disimpan');
  }

  saveAppData();
  closeCalendarAddForm();
  selectCalendarDate(date);
  renderCalendar();
  updateDashboard();
  checkAchievements();
}

export function fileToBase64(file: File): Promise<string | null> {
  return new Promise((res) => {
    const r = new FileReader();
    r.onload = (e: any) => res(e.target.result);
    r.onerror = () => res(null);
    r.readAsDataURL(file);
  });
}

// Belajar Harian (Page 4)
export async function saveStudySession(e: any) {
  e.preventDefault();
  try {
    const editId = (document.getElementById('edit-study-id') as HTMLInputElement).value;
    const newLog: StudyLog = {
      id: editId ? parseInt(editId) : Date.now(),
      date: (document.getElementById('study-date') as HTMLInputElement).value,
      durationHours: (document.getElementById('study-duration-hours') as HTMLInputElement).value,
      location: (document.getElementById('study-location') as HTMLInputElement).value,
      category: (document.getElementById('study-category') as HTMLSelectElement).value,
      questions: (document.getElementById('study-questions') as HTMLInputElement).value,
      bookTitle: (document.getElementById('book-title') as HTMLInputElement).value,
      bookPages: (document.getElementById('book-pages') as HTMLInputElement).value,
      notes: (document.getElementById('study-notes') as HTMLTextAreaElement).value,
    };

    let finalPhotos: number[] = [];
    let finalBookCover: number | null = null;
    let finalQuestionPhotos: number[] = [];

    if (editId) {
      const exist = appData.studyLogs.find(l => l.id == Number(editId));
      if (exist) {
        finalPhotos = exist.photos || [];
        finalBookCover = exist.bookCoverPhotoId || null;
        finalQuestionPhotos = exist.questionPhotoIds || [];
      }
    }

    const sPhotos = (document.getElementById('study-photos') as HTMLInputElement).files;
    if (sPhotos && sPhotos.length > 0) {
      finalPhotos = [];
      for (let i = 0; i < sPhotos.length; i++) {
        const b64 = await fileToBase64(sPhotos[i]);
        const id = await savePhotoToIDB(b64);
        if (id) finalPhotos.push(id);
      }
    }

    const cPhoto = (document.getElementById('book-cover-photo') as HTMLInputElement).files?.[0];
    if (cPhoto) {
      const b64 = await fileToBase64(cPhoto);
      finalBookCover = await savePhotoToIDB(b64);
    }

    const qPhotos = (document.getElementById('question-photos') as HTMLInputElement).files;
    if (qPhotos && qPhotos.length > 0) {
      finalQuestionPhotos = [];
      for (let i = 0; i < qPhotos.length; i++) {
        const b64 = await fileToBase64(qPhotos[i]);
        const id = await savePhotoToIDB(b64);
        if (id) finalQuestionPhotos.push(id);
      }
    }

    newLog.photos = finalPhotos;
    newLog.bookCoverPhotoId = finalBookCover;
    newLog.questionPhotoIds = finalQuestionPhotos;

    if (editId) {
      const idx = appData.studyLogs.findIndex(l => l.id == Number(editId));
      appData.studyLogs[idx] = newLog;
      showToast('✓ Data berhasil diperbarui');
    } else {
      appData.studyLogs.push(newLog);
      showToast('✓ Data belajar berhasil disimpan');
    }

    saveAppData();
    (e.target as HTMLFormElement).reset();
    (document.getElementById('edit-study-id') as HTMLInputElement).value = '';
    renderCalendar();
    updateDashboard();
    checkAchievements();
    switchTab(1);
  } catch (err) {
    showToast('Gagal menyimpan foto. Kurangi ukuran atau jumlah foto.', 'error');
  }
}

// Bank Kesalahan (Page 5)
export async function saveMistake(e: any) {
  e.preventDefault();
  const subtest = (document.getElementById('mistake-subtest') as HTMLSelectElement).value;
  const material = (document.getElementById('mistake-material') as HTMLInputElement).value.trim();
  const question = (document.getElementById('mistake-question') as HTMLTextAreaElement).value.trim();
  const answer = (document.getElementById('mistake-answer') as HTMLInputElement).value.trim();
  const reason = (document.getElementById('mistake-reason') as HTMLSelectElement).value;

  appData.mistakes.push({
    id: Date.now(),
    subtest,
    material,
    question,
    answer,
    reason
  });

  saveAppData();
  (e.target as HTMLFormElement).reset();
  renderMistakes();
  checkAchievements();
  showToast('✓ Catatan disimpan ke Bank Kesalahan');
}

export function renderMistakes() {
  const listC = document.getElementById('mistake-list');
  const rankC = document.getElementById('mistake-ranking');
  if (!listC || !rankC) return;

  if ((appData.mistakes || []).length === 0) {
    listC.innerHTML = `<p class="text-slate-400 text-xs italic">Belum ada catatan kesalahan soal.</p>`;
    rankC.innerHTML = `<p class="text-slate-400 text-xs italic">Belum ada data ranking materi.</p>`;
    return;
  }

  listC.innerHTML = appData.mistakes.map(m => `
    <div class="p-3.5 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 text-xs">
      <div class="flex justify-between items-center font-bold">
        <span class="text-rose-500">${m.subtest} — ${m.material}</span>
        <span class="text-[10px] bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded-lg border border-rose-500/20">${m.reason}</span>
      </div>
      <p class="text-slate-700 dark:text-slate-300 font-medium">Soal: ${m.question}</p>
      <p class="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">Solusi: ${m.answer}</p>
    </div>`).join('');

  const counts: Record<string, number> = {};
  appData.mistakes.forEach(m => {
    counts[m.material] = (counts[m.material] || 0) + 1;
  });

  rankC.innerHTML = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([mat, count], idx) => `
    <div class="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800/80 text-xs font-semibold">
      <span class="text-slate-700 dark:text-slate-300">#${idx + 1} ${mat}</span>
      <span class="text-rose-500 font-bold bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-900/40">${count} Salah</span>
    </div>`).join('');
}

// Tryout System (Requirement 9: Mapel Inten Nilai Maksimal 10, UTBK tetap)
export function setTOType(type: 'utbk' | 'inten') {
  currentTOType = type;
  const container = document.getElementById('to-inputs-container');
  const tabUtbk = document.getElementById('to-tab-utbk');
  const tabInten = document.getElementById('to-tab-inten');
  const title = document.getElementById('to-form-title');

  if (type === 'utbk') {
    if (tabUtbk) tabUtbk.className = "flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all bg-indigo-600 text-white shadow-md shadow-indigo-500/20";
    if (tabInten) tabInten.className = "flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100";
    if (title) title.innerHTML = `<i data-lucide="file-check-2" class="w-4 h-4 text-indigo-500"></i> Input Nilai Tryout UTBK (Skala 0 - 1000)`;
    if (container) {
      container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        ${utbkSubtests.map((sub, i) => `
          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1">${sub}</label>
            <input type="number" id="to-sub-${i}" min="0" max="1000" placeholder="0 - 1000" oninput="window.calculateTOAvg()" class="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold">
          </div>
        `).join('')}
      </div>`;
    }
  } else {
    // Mapel Inten: Maksimal 10
    if (tabInten) tabInten.className = "flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all bg-purple-600 text-white shadow-md shadow-purple-500/20";
    if (tabUtbk) tabUtbk.className = "flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100";
    if (title) title.innerHTML = `<i data-lucide="file-check-2" class="w-4 h-4 text-purple-500"></i> Input Nilai Tryout Mapel INTEN (Skala 0 - 10)`;
    if (container) {
      container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        ${intenSubjects.map((sub, i) => `
          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1">${sub}</label>
            <input type="number" step="0.1" id="to-sub-${i}" min="0" max="10" placeholder="0 - 10" oninput="window.clampIntenInput(this); window.calculateTOAvg()" class="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold">
          </div>
        `).join('')}
      </div>`;
    }
  }

  if ((window as any).lucide) (window as any).lucide.createIcons();
  calculateTOAvg();
  renderTOTable();
}

// Input validation clamp for Inten: 0 - 10
export function clampIntenInput(input: HTMLInputElement) {
  let val = parseFloat(input.value);
  if (isNaN(val)) return;
  if (val < 0) input.value = '0';
  if (val > 10) input.value = '10';
}

export function calculateTOAvg(): number {
  const list = currentTOType === 'utbk' ? utbkSubtests : intenSubjects;
  let sum = 0;
  let count = 0;
  list.forEach((_, i) => {
    const el = document.getElementById(`to-sub-${i}`) as HTMLInputElement | null;
    const val = parseFloat(el?.value || '0') || 0;
    if (val > 0) {
      sum += val;
      count++;
    }
  });
  const avg = count > 0 ? (sum / count).toFixed(1) : '0';
  const preview = document.getElementById('to-avg-preview');
  if (preview) preview.innerText = avg;
  return parseFloat(avg);
}

export async function saveTOSession(e: any) {
  e.preventDefault();
  const editId = (document.getElementById('edit-to-id') as HTMLInputElement).value;
  const title = (document.getElementById('to-title') as HTMLInputElement).value.trim();
  const date = (document.getElementById('to-date') as HTMLInputElement).value;
  const notes = (document.getElementById('to-notes') as HTMLTextAreaElement).value.trim();
  const list = currentTOType === 'utbk' ? utbkSubtests : intenSubjects;
  const scores: Record<string, number> = {};

  list.forEach((sub, i) => {
    const el = document.getElementById(`to-sub-${i}`) as HTMLInputElement | null;
    let val = parseFloat(el?.value || '0') || 0;
    if (currentTOType === 'inten') {
      val = Math.max(0, Math.min(10, val));
    }
    scores[sub] = val;
  });

  const avg = calculateTOAvg();

  if (editId) {
    const idx = appData.toLogs.findIndex(t => t.id == Number(editId));
    appData.toLogs[idx] = { id: parseInt(editId), type: currentTOType, title, date, scores, average: avg, notes };
    showToast('✓ Data TO berhasil diperbarui');
  } else {
    appData.toLogs.push({ id: Date.now(), type: currentTOType, title, date, scores, average: avg, notes });
    showToast('✓ Data TO berhasil disimpan');
  }

  saveAppData();
  resetTOForm();
  renderTOTable();
  renderCalendar();
  updateDashboard();
  renderProgressPage();
  checkAchievements();
}

export function editTO(id: number) {
  const to = appData.toLogs.find(t => t.id === id);
  if (!to) return;
  setTOType(to.type);
  (document.getElementById('edit-to-id') as HTMLInputElement).value = String(id);
  (document.getElementById('to-title') as HTMLInputElement).value = to.title;
  (document.getElementById('to-date') as HTMLInputElement).value = to.date;
  (document.getElementById('to-notes') as HTMLTextAreaElement).value = to.notes || '';
  const list = to.type === 'utbk' ? utbkSubtests : intenSubjects;
  list.forEach((sub, i) => {
    const el = document.getElementById(`to-sub-${i}`) as HTMLInputElement | null;
    if (el) el.value = to.scores[sub] !== undefined ? String(to.scores[sub]) : '';
  });
  calculateTOAvg();
  const submitBtn = document.getElementById('to-submit-btn');
  if (submitBtn) submitBtn.innerText = 'Simpan Perubahan';
  document.getElementById('to-cancel-btn')?.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function resetTOForm() {
  (document.getElementById('edit-to-id') as HTMLInputElement).value = '';
  (document.getElementById('to-title') as HTMLInputElement).value = '';
  (document.getElementById('to-date') as HTMLInputElement).value = '';
  (document.getElementById('to-notes') as HTMLTextAreaElement).value = '';
  const list = currentTOType === 'utbk' ? utbkSubtests : intenSubjects;
  list.forEach((sub, i) => {
    const el = document.getElementById(`to-sub-${i}`) as HTMLInputElement | null;
    if (el) el.value = '';
  });
  calculateTOAvg();
  const submitBtn = document.getElementById('to-submit-btn');
  if (submitBtn) submitBtn.innerText = 'Simpan Nilai Tryout';
  document.getElementById('to-cancel-btn')?.classList.add('hidden');
}

let deleteToId: number | null = null;
export function confirmDeleteTO(id: number) {
  deleteToId = id;
  document.getElementById('confirm-delete-to-modal')?.classList.remove('hidden');
}

export function cancelDeleteTO() {
  document.getElementById('confirm-delete-to-modal')?.classList.add('hidden');
  deleteToId = null;
}

export async function performDeleteTO() {
  appData.toLogs = appData.toLogs.filter(t => t.id !== deleteToId);
  saveAppData();
  cancelDeleteTO();
  renderTOTable();
  updateDashboard();
  renderProgressPage();
  checkAchievements();
  showToast('✓ Data TO berhasil dihapus');
}

export function renderTOTable() {
  const container = document.getElementById('to-history-list');
  const title = document.getElementById('to-history-title');
  if (!container) return;

  const logs = (appData.toLogs || []).filter(t => t.type === currentTOType);
  if (title) title.innerText = `Riwayat Tryout ${currentTOType.toUpperCase()}`;

  if (logs.length === 0) {
    container.innerHTML = `<p class="text-slate-400 text-xs italic">Belum ada riwayat Tryout ${currentTOType.toUpperCase()}.</p>`;
    return;
  }

  container.innerHTML = logs.map(t => `
    <div class="p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800/80 space-y-2 text-xs">
      <div class="flex justify-between items-center font-bold">
        <span class="text-slate-800 dark:text-slate-200">${t.title} (${t.date})</span>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-indigo-500/10 text-indigo-500 rounded-lg font-black mr-2">Rata-rata: ${t.average}</span>
          <button onclick="window.editTO(${t.id})" class="text-indigo-500 hover:text-indigo-400 p-1" title="Edit"><i class="fas fa-edit"></i></button>
          <button onclick="window.confirmDeleteTO(${t.id})" class="text-rose-500 hover:text-rose-400 p-1" title="Hapus"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
        ${Object.entries(t.scores || {}).map(([sub, val]) => `
          <div><span class="text-slate-400 font-medium">${sub}:</span> <span class="font-bold text-slate-700 dark:text-slate-300">${val}</span></div>
        `).join('')}
      </div>
      ${t.notes ? `<p class="text-slate-500 dark:text-slate-400 italic text-[11px]">"${t.notes}"</p>` : ''}
    </div>
  `).join('');
}

// Progress & Charts
export function setProgressType(type: 'utbk' | 'inten') {
  currentProgressType = type;
  const tabUtbk = document.getElementById('progress-tab-utbk');
  const tabInten = document.getElementById('progress-tab-inten');
  if (type === 'utbk') {
    if (tabUtbk) tabUtbk.className = "flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all bg-indigo-600 text-white shadow-md shadow-indigo-500/20";
    if (tabInten) tabInten.className = "flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400";
  } else {
    if (tabInten) tabInten.className = "flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all bg-purple-600 text-white shadow-md shadow-purple-500/20";
    if (tabUtbk) tabUtbk.className = "flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400";
  }
  renderProgressPage();
}

export function renderProgressPage() {
  const logs = (appData.toLogs || []).filter(t => t.type === currentProgressType).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  // For UTBK target is profile target (default 700), for INTEN target is 10 (scale 0-10)
  const target = currentProgressType === 'utbk' ? (appData.profile.targetScore || 700) : 10;
  
  const targetEl = document.getElementById('dash-progress-target');
  if (targetEl) targetEl.innerText = String(target);

  const latestAvg = logs.length > 0 ? parseFloat(String(logs[logs.length - 1].average)) : 0;
  const percent = Math.min(100, Math.round((latestAvg / target) * 100));

  const percentEl = document.getElementById('dash-progress-percent');
  if (percentEl) percentEl.innerText = String(percent);
  const barEl = document.getElementById('dash-progress-bar');
  if (barEl) barEl.style.width = `${percent}%`;

  const anaTitle = document.getElementById('progress-analysis-title');
  const anaDesc = document.getElementById('progress-analysis-desc');

  if (logs.length > 0) {
    const subSums: Record<string, number> = {};
    const subCounts: Record<string, number> = {};
    logs.forEach(l => {
      Object.entries(l.scores || {}).forEach(([sub, score]) => {
        subSums[sub] = (subSums[sub] || 0) + (parseFloat(String(score)) || 0);
        subCounts[sub] = (subCounts[sub] || 0) + 1;
      });
    });
    let lowestSub = '';
    let lowestAvg = 9999;
    Object.keys(subSums).forEach(sub => {
      const avg = subSums[sub] / subCounts[sub];
      if (avg < lowestAvg) {
        lowestAvg = avg;
        lowestSub = sub;
      }
    });
    if (anaTitle) anaTitle.innerText = `Kelemahan Utama: ${lowestSub}`;
    if (anaDesc) anaDesc.innerText = `Nilai rata-rata ${lowestSub} kamu adalah ${lowestAvg.toFixed(1)}. Berikan porsi latihan ekstra untuk subtes ini!`;
  } else {
    if (anaTitle) anaTitle.innerText = `Belum Ada Data`;
    if (anaDesc) anaDesc.innerText = `Input nilai Tryout terlebih dahulu agar sistem bisa mendeteksi kelemahanmu secara otomatis.`;
  }

  renderTrendChart(logs);
  renderSubtestChart(logs);
  renderCategoryChart();
}

export function renderTrendChart(logs: TOLog[]) {
  const canvas = document.getElementById('toTrendChart') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  if (trendChartInstance) trendChartInstance.destroy();

  const chartTitle = document.getElementById('trend-chart-title');
  if (chartTitle) chartTitle.innerHTML = `<i data-lucide="trending-up" class="w-4 h-4 text-indigo-500"></i> Trend Rata-Rata Skor ${currentProgressType.toUpperCase()} (Skala ${currentProgressType === 'utbk' ? '0 - 1000' : '0 - 10'})`;

  trendChartInstance = new (window as any).Chart(ctx, {
    type: 'line',
    data: {
      labels: logs.map((l, i) => `TO #${i + 1}`),
      datasets: [{
        label: 'Skor',
        data: logs.map(l => l.average),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.12)',
        fill: true,
        tension: 0.3,
        borderWidth: 2.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          min: 0,
          max: currentProgressType === 'utbk' ? 1000 : 10
        }
      }
    }
  });
  if ((window as any).lucide) (window as any).lucide.createIcons();
}

export function renderSubtestChart(logs: TOLog[]) {
  const canvas = document.getElementById('subtestTrendChart') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  if (subtestChartInstance) subtestChartInstance.destroy();

  const subjects = currentProgressType === 'utbk' ? utbkSubtests : intenSubjects;
  const colors: Record<string, string> = {
    'PK': '#ef4444', 'PU': '#3b82f6', 'PBM': '#10b981', 'PPU': '#f59e0b',
    'Literasi B. Indo': '#8b5cf6', 'Literasi B. Inggris': '#ec4899', 'Penalaran MTK': '#06b6d4',
    'B. Indonesia': '#8b5cf6', 'B. Inggris': '#ec4899', 'Matematika': '#06b6d4',
    'Fisika': '#14b8a6', 'Kimia': '#f97316', 'Biologi': '#84cc16'
  };

  const datasets = subjects.map(sub => ({
    label: sub,
    data: logs.map(l => l.scores ? (l.scores[sub] || 0) : 0),
    borderColor: colors[sub] || '#94a3b8',
    borderWidth: 2,
    tension: 0.2
  }));

  subtestChartInstance = new (window as any).Chart(ctx, {
    type: 'line',
    data: {
      labels: logs.map((l, i) => `TO #${i + 1}`),
      datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 10, font: { size: 10 } }
        }
      },
      scales: {
        y: {
          min: 0,
          max: currentProgressType === 'utbk' ? 1000 : 10
        }
      }
    }
  });
}

export function renderCategoryChart() {
  const canvas = document.getElementById('categoryChart') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  if (categoryChartInstance) categoryChartInstance.destroy();

  const catMap: Record<string, number> = {};
  (appData.studyLogs || []).forEach(l => {
    catMap[l.category] = (catMap[l.category] || 0) + (parseFloat(String(l.durationHours)) || 0);
  });

  categoryChartInstance = new (window as any).Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(catMap).length > 0 ? Object.keys(catMap) : ['Belum Ada Data'],
      datasets: [{
        data: Object.keys(catMap).length > 0 ? Object.values(catMap) : [1],
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#14b8a6', '#f97316', '#84cc16']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { font: { size: 10 }, boxWidth: 10 } }
      }
    }
  });
}

// Badges (Page 8)
export function renderBadges() {
  const container = document.getElementById('badges-grid');
  if (!container) return;
  if (!appData.unlockedAchievements) appData.unlockedAchievements = [];

  const all = getAllAchievements();

  container.innerHTML = all.map(b => {
    const earned = appData.unlockedAchievements.includes(b.id);
    return `
      <div class="p-4 rounded-2xl border ${earned ? 'bg-amber-500/10 border-amber-500/30 text-amber-500 shadow-sm' : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200/80 dark:border-slate-800/80 text-slate-400 opacity-70'} text-center space-y-2 flex flex-col justify-between">
        <div class="w-11 h-11 mx-auto rounded-2xl ${earned ? 'bg-gradient-to-tr from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/20' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'} flex items-center justify-center font-bold text-lg">
          ${earned ? (b.icon || '🏆') : '🔒'}
        </div>
        <div>
          <h4 class="font-bold text-xs text-slate-900 dark:text-white leading-tight">${b.title}</h4>
          <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${b.desc}</p>
        </div>
        <div class="text-[9px] font-black uppercase mt-1 tracking-wider ${earned ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'}">
          ${earned ? '🏆 Tercapai' : '🔒 Belum Tercapai'}
        </div>
      </div>`;
  }).join('');
}

// Settings: Profile, Subjects, Achievements, Data
export function loadSettingsForm() {
  const p = appData.profile || { name: '', univ: '', major: '', targetScore: 700, motivation: '', logoB64: '' };
  const el = (id: string) => document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
  const name = el('set-name'); if (name) { name.value = ''; name.placeholder = p.name ? `Saat ini: ${p.name}` : 'Nama Lengkap'; }
  const univ = el('set-univ'); if (univ) { univ.value = ''; univ.placeholder = p.univ ? `Saat ini: ${p.univ}` : 'Contoh: Universitas Gadjah Mada'; }
  const major = el('set-major'); if (major) { major.value = ''; major.placeholder = p.major ? `Saat ini: ${p.major}` : 'Contoh: Ilmu Komputer'; }
  const score = el('set-score'); if (score) { score.value = ''; score.placeholder = p.targetScore ? `Saat ini: ${p.targetScore}` : 'Contoh: 750'; }
  const mot = el('set-motivation'); if (mot) { mot.value = ''; mot.placeholder = p.motivation ? `Saat ini: "${p.motivation}"` : 'Tulis kalimat motivasi kamu di sini...'; }
}

export function saveSettings(e: any) {
  e.preventDefault();
  document.getElementById('confirm-settings-modal')?.classList.remove('hidden');
}

export function cancelSaveSettings() {
  document.getElementById('confirm-settings-modal')?.classList.add('hidden');
}

export async function performSaveSettings() {
  document.getElementById('confirm-settings-modal')?.classList.add('hidden');
  const old = appData.profile || { name: '', univ: '', major: '', targetScore: 700, motivation: '', logoB64: '' };
  const el = (id: string) => (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null)?.value.trim();
  const logoFile = (document.getElementById('set-logo') as HTMLInputElement | null)?.files?.[0];

  appData.profile = {
    name: el('set-name') || old.name || '',
    univ: el('set-univ') || old.univ || '',
    major: el('set-major') || old.major || '',
    targetScore: el('set-score') ? parseInt(el('set-score')!) : (old.targetScore || 700),
    motivation: el('set-motivation') || old.motivation || '',
    logoB64: logoFile ? (await fileToBase64(logoFile) || old.logoB64) : (old.logoB64 || '')
  };

  saveAppData();
  updateDashboard();
  loadSettingsForm();
  showToast('✓ Pengaturan profil berhasil disimpan');
}

// ----------------------------------------------------
// FITUR MATA PELAJARAN DI PENGATURAN (Requirement 1)
// ----------------------------------------------------
export function renderSubjectManagementList() {
  const container = document.getElementById('settings-subject-list');
  if (!container) return;
  const subjects = appData.subjects && appData.subjects.length > 0 ? appData.subjects : DEFAULT_SUBJECTS;

  container.innerHTML = subjects.map(s => `
    <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800/80 text-xs">
      <div class="flex items-center gap-2.5">
        <span class="text-base">${s.icon || '📚'}</span>
        <span class="font-bold text-slate-800 dark:text-slate-200">${s.name}</span>
        ${s.isCustom ? '<span class="text-[9px] bg-indigo-500/10 text-indigo-500 font-semibold px-2 py-0.5 rounded-full">Custom</span>' : ''}
      </div>
      <div class="flex items-center gap-1.5">
        <button onclick="window.editSubject('${s.id}')" class="px-2.5 py-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded-lg font-bold text-xs transition">Edit</button>
        <button onclick="window.confirmDeleteSubject('${s.id}')" class="px-2.5 py-1 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg font-bold text-xs transition">Hapus</button>
      </div>
    </div>
  `).join('');
}

export function openAddSubjectModal() {
  (document.getElementById('modal-subject-id') as HTMLInputElement).value = '';
  (document.getElementById('modal-subject-name') as HTMLInputElement).value = '';
  (document.getElementById('modal-subject-icon') as HTMLInputElement).value = '';
  const title = document.getElementById('modal-subject-title');
  if (title) title.innerText = 'Tambah Mata Pelajaran';
  document.getElementById('subject-modal')?.classList.remove('hidden');
}

export function closeSubjectModal() {
  document.getElementById('subject-modal')?.classList.add('hidden');
}

export function saveSubjectModal(e: any) {
  e.preventDefault();
  const id = (document.getElementById('modal-subject-id') as HTMLInputElement).value;
  const name = (document.getElementById('modal-subject-name') as HTMLInputElement).value.trim();
  const icon = (document.getElementById('modal-subject-icon') as HTMLInputElement).value.trim() || '📚';

  if (!name) return;

  if (!appData.subjects) appData.subjects = [...DEFAULT_SUBJECTS];

  if (id) {
    const idx = appData.subjects.findIndex(s => s.id === id);
    if (idx !== -1) {
      appData.subjects[idx] = { ...appData.subjects[idx], name, icon, isCustom: true };
      showToast('✓ Mata pelajaran berhasil diperbarui');
    }
  } else {
    const newId = 'sub_custom_' + Date.now();
    appData.subjects.push({ id: newId, name, icon, isCustom: true });
    showToast('✓ Mata pelajaran berhasil ditambahkan');
  }

  saveAppData();
  closeSubjectModal();
  renderSubjectManagementList();
  updateSubjectDropdowns();
}

export function editSubject(id: string) {
  const subjects = appData.subjects || DEFAULT_SUBJECTS;
  const s = subjects.find(item => item.id === id);
  if (!s) return;

  (document.getElementById('modal-subject-id') as HTMLInputElement).value = s.id;
  (document.getElementById('modal-subject-name') as HTMLInputElement).value = s.name;
  (document.getElementById('modal-subject-icon') as HTMLInputElement).value = s.icon || '';
  const title = document.getElementById('modal-subject-title');
  if (title) title.innerText = 'Edit Mata Pelajaran';
  document.getElementById('subject-modal')?.classList.remove('hidden');
}

let deleteSubjectTargetId: string | null = null;
export function confirmDeleteSubject(id: string) {
  deleteSubjectTargetId = id;
  document.getElementById('confirm-delete-subject-modal')?.classList.remove('hidden');
}

export function cancelDeleteSubject() {
  document.getElementById('confirm-delete-subject-modal')?.classList.add('hidden');
  deleteSubjectTargetId = null;
}

export function performDeleteSubject() {
  if (!deleteSubjectTargetId) return;
  if (!appData.subjects) appData.subjects = [...DEFAULT_SUBJECTS];
  appData.subjects = appData.subjects.filter(s => s.id !== deleteSubjectTargetId);
  saveAppData();
  cancelDeleteSubject();
  renderSubjectManagementList();
  updateSubjectDropdowns();
  showToast('✓ Mata pelajaran berhasil dihapus');
}

// ----------------------------------------------------
// FITUR KELOLA PENCAPAIAN DI PENGATURAN (Requirement 2)
// ----------------------------------------------------
export function renderCustomAchievementList() {
  const container = document.getElementById('settings-achievement-list');
  if (!container) return;
  const customs = appData.customAchievements || [];

  if (customs.length === 0) {
    container.innerHTML = `<p class="text-slate-400 text-xs italic">Belum ada pencapaian custom yang dibuat. Tekan tombol Tambah di atas untuk membuat pencapaian baru.</p>`;
    return;
  }

  container.innerHTML = customs.map(a => `
    <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800/80 text-xs">
      <div class="flex items-center gap-2.5">
        <span class="text-base">${a.icon || '🏆'}</span>
        <div>
          <p class="font-bold text-slate-800 dark:text-slate-200">${a.title}</p>
          <p class="text-[10px] text-slate-400">${a.desc} (Target: ${a.req} • Jenis: ${a.type})</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5">
        <button onclick="window.editCustomAchievement('${a.id}')" class="px-2.5 py-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded-lg font-bold text-xs transition">Edit</button>
        <button onclick="window.confirmDeleteAchievement('${a.id}')" class="px-2.5 py-1 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg font-bold text-xs transition">Hapus</button>
      </div>
    </div>
  `).join('');
}

export function openAddAchievementModal() {
  (document.getElementById('modal-ach-id') as HTMLInputElement).value = '';
  (document.getElementById('modal-ach-title') as HTMLInputElement).value = '';
  (document.getElementById('modal-ach-desc') as HTMLInputElement).value = '';
  (document.getElementById('modal-ach-req') as HTMLInputElement).value = '7';
  (document.getElementById('modal-ach-icon') as HTMLInputElement).value = '🔥';
  (document.getElementById('modal-ach-type') as HTMLSelectElement).value = 'streak';
  const title = document.getElementById('modal-ach-heading');
  if (title) title.innerText = 'Tambah Pencapaian Custom';
  document.getElementById('achievement-modal')?.classList.remove('hidden');
}

export function closeAchievementModal() {
  document.getElementById('achievement-modal')?.classList.add('hidden');
}

export function saveAchievementModal(e: any) {
  e.preventDefault();
  const id = (document.getElementById('modal-ach-id') as HTMLInputElement).value;
  const title = (document.getElementById('modal-ach-title') as HTMLInputElement).value.trim();
  const desc = (document.getElementById('modal-ach-desc') as HTMLInputElement).value.trim();
  const req = parseInt((document.getElementById('modal-ach-req') as HTMLInputElement).value) || 1;
  const icon = (document.getElementById('modal-ach-icon') as HTMLInputElement).value.trim() || '🏆';
  const type = (document.getElementById('modal-ach-type') as HTMLSelectElement).value as any;

  if (!title) return;
  if (!appData.customAchievements) appData.customAchievements = [];

  if (id) {
    const idx = appData.customAchievements.findIndex(a => a.id === id);
    if (idx !== -1) {
      appData.customAchievements[idx] = { id, title, desc, req, icon, type, isCustom: true };
      showToast('✓ Pencapaian berhasil diperbarui');
    }
  } else {
    const newId = 'custom_ach_' + Date.now();
    appData.customAchievements.push({ id: newId, title, desc, req, icon, type, isCustom: true });
    showToast('✓ Pencapaian baru ditambahkan');
  }

  saveAppData();
  closeAchievementModal();
  renderCustomAchievementList();
  checkAchievements();
}

export function editCustomAchievement(id: string) {
  const customs = appData.customAchievements || [];
  const a = customs.find(item => item.id === id);
  if (!a) return;

  (document.getElementById('modal-ach-id') as HTMLInputElement).value = a.id;
  (document.getElementById('modal-ach-title') as HTMLInputElement).value = a.title;
  (document.getElementById('modal-ach-desc') as HTMLInputElement).value = a.desc;
  (document.getElementById('modal-ach-req') as HTMLInputElement).value = String(a.req);
  (document.getElementById('modal-ach-icon') as HTMLInputElement).value = a.icon;
  (document.getElementById('modal-ach-type') as HTMLSelectElement).value = a.type;
  const heading = document.getElementById('modal-ach-heading');
  if (heading) heading.innerText = 'Edit Pencapaian Custom';
  document.getElementById('achievement-modal')?.classList.remove('hidden');
}

let deleteAchTargetId: string | null = null;
export function confirmDeleteAchievement(id: string) {
  deleteAchTargetId = id;
  document.getElementById('confirm-delete-ach-modal')?.classList.remove('hidden');
}

export function cancelDeleteAchievement() {
  document.getElementById('confirm-delete-ach-modal')?.classList.add('hidden');
  deleteAchTargetId = null;
}

export function performDeleteAchievement() {
  if (!deleteAchTargetId) return;
  if (!appData.customAchievements) appData.customAchievements = [];
  appData.customAchievements = appData.customAchievements.filter(a => a.id !== deleteAchTargetId);
  // Also remove from unlocked achievements
  appData.unlockedAchievements = (appData.unlockedAchievements || []).filter(id => id !== deleteAchTargetId);
  saveAppData();
  cancelDeleteAchievement();
  renderCustomAchievementList();
  showToast('✓ Pencapaian berhasil dihapus');
}

// Data Export & Import
export function exportData() {
  const d = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData));
  const a = document.createElement('a');
  a.setAttribute("href", d);
  a.setAttribute("download", `Belajarku_Data_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function importData(e: any) {
  const f = e.target.files?.[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = async (evt: any) => {
    try {
      const parsed = JSON.parse(evt.target.result);
      appData = parsed;
      saveAppData();
      showToast('Data berhasil diimpor!');
      window.location.reload();
    } catch {
      showToast('File JSON tidak valid', 'error');
    }
  };
  r.readAsText(f);
}

// Global Window Exports
export function registerGlobals() {
  const w = window as any;
  w.switchTab = switchTab;
  w.mobileSwitchTab = mobileSwitchTab;
  w.toggleMobileSidebar = toggleMobileSidebar;
  w.toggleTheme = toggleTheme;
  w.showToast = showToast;
  w.changeMonth = changeMonth;
  w.selectCalendarDate = selectCalendarDate;
  w.closeDetailCard = closeDetailCard;
  w.openCalendarAddForm = openCalendarAddForm;
  w.closeCalendarAddForm = closeCalendarAddForm;
  w.editCalendarLog = editCalendarLog;
  w.confirmDeleteCal = confirmDeleteCal;
  w.cancelDeleteCal = cancelDeleteCal;
  w.performDeleteCal = performDeleteCal;
  w.saveCalendarSession = saveCalendarSession;
  w.openLightbox = openLightbox;
  w.closeLightbox = closeLightbox;
  w.saveStudySession = saveStudySession;
  w.saveMistake = saveMistake;
  w.setTOType = setTOType;
  w.clampIntenInput = clampIntenInput;
  w.calculateTOAvg = calculateTOAvg;
  w.saveTOSession = saveTOSession;
  w.editTO = editTO;
  w.resetTOForm = resetTOForm;
  w.confirmDeleteTO = confirmDeleteTO;
  w.cancelDeleteTO = cancelDeleteTO;
  w.performDeleteTO = performDeleteTO;
  w.setProgressType = setProgressType;
  w.saveSettings = saveSettings;
  w.cancelSaveSettings = cancelSaveSettings;
  w.performSaveSettings = performSaveSettings;
  w.exportData = exportData;
  w.importData = importData;
  // Subject Management
  w.openAddSubjectModal = openAddSubjectModal;
  w.closeSubjectModal = closeSubjectModal;
  w.saveSubjectModal = saveSubjectModal;
  w.editSubject = editSubject;
  w.confirmDeleteSubject = confirmDeleteSubject;
  w.cancelDeleteSubject = cancelDeleteSubject;
  w.performDeleteSubject = performDeleteSubject;
  // Achievement Management
  w.openAddAchievementModal = openAddAchievementModal;
  w.closeAchievementModal = closeAchievementModal;
  w.saveAchievementModal = saveAchievementModal;
  w.editCustomAchievement = editCustomAchievement;
  w.confirmDeleteAchievement = confirmDeleteAchievement;
  w.cancelDeleteAchievement = cancelDeleteAchievement;
  w.performDeleteAchievement = performDeleteAchievement;
}

// Initial Boot
export async function initApp() {
  try { await initDB(); } catch (err) { console.error('IndexedDB error', err); }
  try { loadAppData(); } catch (err) { console.error('Data load error', err); }
  initTheme();
  registerGlobals();
  updateSubjectDropdowns();
  updateDashboard();
  renderCalendar();
  renderMistakes();
  setTOType('utbk');
  setProgressType('utbk');
  checkAchievements();
  if ((window as any).lucide) (window as any).lucide.createIcons();
}






